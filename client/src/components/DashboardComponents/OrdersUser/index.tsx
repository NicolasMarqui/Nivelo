import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useState } from "react";
import { useUserOrdersQuery } from "src/generated/graphql";
import OrdersUserList from "../OrdersUserList";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";

interface OrdersUsersProps {
    userId: number;
}

const OrdersUsers: React.FC<OrdersUsersProps> = ({ userId }) => {
    const [page, setPage] = useState(1);
    // prettier-ignore
    const [{ data, fetching, error }] = useUserOrdersQuery({
        variables: { id: userId },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <EmptyAnimation />;
    }

    const handlePagination = (e: number) => {
        setPage(e);
    };

    return (
        <div id="userOrders">
            {data &&
            data.getUserOrders !== undefined &&
            data.getUserOrders.length > 0 ? (
                <>
                    {data.getUserOrders
                        .slice((page - 1) * 5, page * 5)
                        .map((o) => (
                            // @ts-ignore
                            <OrdersUserList order={o} key={o.id} />
                        ))}

                    <ReactPaginate
                        previousLabel={"Anterior"}
                        nextLabel={"Próximo"}
                        containerClassName={"pagination"}
                        activeClassName={"active"}
                        pageCount={getTotalPages(data.getUserOrders.length, 5)}
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
        </div>
    );
};
export default OrdersUsers;
