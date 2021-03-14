import { useState, useRef } from "react";
import { useUserOrdersQuery } from "../../../generated/graphql";
import LoadingAnimation from "../../LoadingAnimation";
import UserOrdersList from "../UserOrdersList";
import { UserOrdersWrapper } from "./UserOrders.style";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "../../../utils/getTotalPages";
import useSmoothScroll from "react-smooth-scroll-hook";
import { useRouter } from "next/router";
interface UserOrdersProps {
    id: number;
}

const UserOrders: React.FC<UserOrdersProps> = ({ id }) => {
    const router = useRouter();
    // prettier-ignore
    const [page, setPage] = useState(typeof router.query.page === "string" ? parseInt(router.query.page) : 1);
    const ref = useRef<HTMLElement>(document.documentElement);
    const { scrollTo } = useSmoothScroll({
        ref,
        speed: 100,
        direction: "y",
    });

    const [{ data, fetching, error }] = useUserOrdersQuery({
        variables: { id, page },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <p>Algo deu errado!</p>;
    }

    const handlePagination = (e: number) => {
        router.push(
            {
                pathname: `/dashboard`,
                query: { ...router.query, page: e },
            },
            undefined,
            { shallow: true }
        );

        setPage(e);
        scrollTo("#orderBeg", -100);
    };

    return (
        <UserOrdersWrapper id="orderBeg">
            {!data.getUserOrders || data.getUserOrders.order.length === 0 ? (
                <p>Empty</p>
            ) : (
                data.getUserOrders.order.map((ord) => (
                    <UserOrdersList key={ord.id} order={ord} />
                ))
            )}
            <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Próximo"}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageCount={getTotalPages(data.getUserOrders.amount, 5)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(e) =>
                    handlePagination(e.selected === 0 ? 1 : e.selected + 1)
                }
            />
        </UserOrdersWrapper>
    );
};
export default UserOrders;
