import toast from "react-hot-toast";
import { BsCheckCircle } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import TimeAgo from "react-timeago";
import ReactTooltip from "react-tooltip";
import { useMakeOrderApprovedMutation } from "../../../generated/graphql";
import useWindowSize from "../../../hooks/useWindowSize";
import { Button, Flex, FormLabel } from "../../../styles/helpers";
import { formatter } from "../../../utils/agoPtFormat";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { UserOrdersListWrapper } from "./TutorOrdersList.style";

export interface TutorOrdersListProps {
    order: {
        __typename?: string;
        id?: string;
        user?: {
            id?: number;
            name: string;
        };
        classes?: any;
        date?: string;
        platformId?: number;
        classDuration?: string;
        userAccount?: string | null;
        classPrice?: number;
        isOrderAproved?: boolean;
        hasTutorConfirmedClassDone?: boolean;
        hasUserConfirmedClassDone?: boolean;
        isPaid?: boolean;
        paymentDetails?: string;
        createdAt?: string;
        updatedAt?: string;
    };
}

const TutorOrdersList: React.FC<TutorOrdersListProps> = ({ order }) => {
    const { width } = useWindowSize();
    const [, makeOrderApproved] = useMakeOrderApprovedMutation();

    const isMobile = width < 1024;

    const handleOrderApproved = async () => {
        const response = await makeOrderApproved({ orderID: order.id });

        if (response.data && response.data.makeOrderApproved !== undefined) {
            toast.success("Pedido de aula aprovado!");
        } else {
            toast.error("Algo deu errado...Tente novamente!");
        }
    };

    return (
        <>
            <UserOrdersListWrapper>
                <Flex
                    col
                    align={isMobile ? "center" : "flex-start"}
                    justifyCenter
                    size={2}
                >
                    <div className="order__title">
                        <h2>{order.classes.name}</h2>
                    </div>
                    <FormLabel>
                        Agendamento feito
                        <TimeAgo
                            date={Number(order.createdAt)}
                            formatter={formatter}
                            live={true}
                            style={{ marginLeft: 5 }}
                        />
                    </FormLabel>
                    <div className="order__userInfo">
                        <ul>
                            <li>
                                <p>Usuário: {order.user.name}</p>
                            </li>
                            <li>
                                <p>{order.date}</p>
                            </li>
                            <li>
                                <p>
                                    {order.isPaid
                                        ? "Aula paga"
                                        : "Aguardando pagamento"}
                                </p>
                            </li>
                        </ul>
                    </div>
                </Flex>
                <Flex justifyCenter col align="center" size={3}>
                    <FormLabel>Valor total: </FormLabel>
                    <TutorTitle>R${order.classPrice}</TutorTitle>
                </Flex>
                <Flex justifyCenter size={1}>
                    <Button
                        data-tip="Aprovar"
                        data-for="apro"
                        onClick={handleOrderApproved}
                    >
                        <BsCheckCircle size={25} color="#57CC99" />
                        <ReactTooltip effect="solid" id="apro" />
                    </Button>
                    <Button data-tip="Recusar" data-for="rec">
                        <FaTimesCircle size={25} color="#fb475e" />
                        <ReactTooltip effect="solid" id="rec" />
                    </Button>
                </Flex>
            </UserOrdersListWrapper>
        </>
    );
};
export default TutorOrdersList;
