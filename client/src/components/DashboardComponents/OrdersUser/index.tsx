import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useRouter } from "next/router";
import { useState } from "react";
import { useUserOrdersQuery } from "src/generated/graphql";
import OrdersUserList from "../OrdersUserList";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";

interface OrdersUsersProps {
    userId: number;
}

const OrdersUsers: React.FC<OrdersUsersProps> = ({ userId }) => {
    const router = useRouter();
    // prettier-ignore
    const [page, setPage] = useState(typeof router.query.page === "string" ? parseInt(router.query.page) : 1);
    const [{ data, fetching, error }] = useUserOrdersQuery({
        variables: { id: userId, page },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <EmptyAnimation />;
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
    };

    return (
        <>
            {data &&
            data.getUserOrders !== undefined &&
            data.getUserOrders.order.length > 0 ? (
                <>
                    {data.getUserOrders.order.map((o) => (
                        // @ts-ignore
                        <OrdersUserList order={o} key={o.id} />
                    ))}

                    <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Próximo"}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        pageCount={getTotalPages(data.getUserOrders.amount, 5)}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={(e) =>
                            handlePagination(
                                e.selected === 0 ? 1 : e.selected + 1
                            )
                        }
                    />
                </>
            ) : (
                <EmptyAnimation />
            )}
        </>
    );
};
export default OrdersUsers;
