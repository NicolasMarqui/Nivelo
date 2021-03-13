import { useState, useRef } from "react";
import { useUserOrdersQuery } from "../../../generated/graphql";
import LoadingAnimation from "../../LoadingAnimation";
import UserOrdersList from "../UserOrdersList";
import { UserOrdersWrapper } from "./UserOrders.style";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "../../../utils/getTotalPages";
import useSmoothScroll from "react-smooth-scroll-hook";
interface UserOrdersProps {
    id: number;
}

const UserOrders: React.FC<UserOrdersProps> = ({ id }) => {
    const [page, setPage] = useState(1);
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
        setPage(e);
        scrollTo("#orderBeg");
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
                initialPage={1}
                pageCount={getTotalPages(data.getUserOrders.amount, 5)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={(e) => handlePagination(e.selected)}
            />
        </UserOrdersWrapper>
    );
};
export default UserOrders;
