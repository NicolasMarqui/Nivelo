import { Button, Flex } from "../../../styles/helpers";
import IconButton from "../../IconButton";
import { UserOrderDetailsWrapper } from "./UserOrdersDetails.style";
import { FaStar, FaMoneyBillAlt } from "react-icons/fa";

interface UserOrdersDetailsProps {
    isVisible: boolean;
    classData: any;
    allData: any;
}

const UserOrdersDetails: React.FC<UserOrdersDetailsProps> = ({
    isVisible,
    classData,
    allData,
}) => {
    return (
        <UserOrderDetailsWrapper isVisible={isVisible}>
            <ul>
                <li>
                    <div className="details__order">
                        <Flex col size={1} align="flex-start">
                            <div className="ord order__title">
                                <strong>Nome da aula: </strong>
                                <h3>{classData.name}</h3>
                            </div>
                            <div className="ord order__tutor">
                                <strong>Ensinado por: </strong>
                                <h3>{classData.tutor.user.name}</h3>
                            </div>
                        </Flex>
                    </div>
                </li>
                <li>
                    <div className="details__order">
                        {allData.isPaid ? (
                            <FaMoneyBillAlt size={17} />
                        ) : (
                            <IconButton
                                text="Pagar"
                                bColor="#57CC99"
                                color="#fff"
                                icon={<FaMoneyBillAlt size={17} />}
                                smaller
                            />
                        )}
                        <IconButton
                            text="Deixar Feedback"
                            bColor="#F4D35E"
                            color="#fff"
                            icon={<FaStar size={17} />}
                            smaller
                        />
                    </div>
                </li>
            </ul>
        </UserOrderDetailsWrapper>
    );
};
export default UserOrdersDetails;
