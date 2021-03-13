import { UserOrderDetailsWrapper } from "./UserOrdersDetails.style";

interface UserOrdersDetailsProps {
    isVisible: boolean;
}

const UserOrdersDetails: React.FC<UserOrdersDetailsProps> = ({ isVisible }) => {
    return (
        <UserOrderDetailsWrapper isVisible={isVisible}>
            hemlo
        </UserOrderDetailsWrapper>
    );
};
export default UserOrdersDetails;
