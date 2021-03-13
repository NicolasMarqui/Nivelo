import { useUserOrdersQuery } from "../../../generated/graphql";
import LoadingAnimation from "../../LoadingAnimation";
import UserOrdersList from "../UserOrdersList";
import { UserOrdersWrapper } from "./UserOrders.style";

interface UserOrdersProps {
    id: number;
}

const UserOrders: React.FC<UserOrdersProps> = ({ id }) => {
    const [{ data, fetching, error }] = useUserOrdersQuery({
        variables: { id },
    });

    if (fetching) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <p>Algo deu errado!</p>;
    }

    return (
        <UserOrdersWrapper>
            {!data.getUserOrders || data.getUserOrders.length === 0 ? (
                <p>Empty</p>
            ) : (
                data.getUserOrders.map((ord) => (
                    <UserOrdersList key={ord.id} order={ord} />
                ))
            )}
        </UserOrdersWrapper>
    );
};
export default UserOrders;
