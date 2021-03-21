import { useSingleClassQuery } from "../../../generated/graphql";
import { OrderDetails } from "../../../pages/order/Order.style";
import { Description, PreTitle, Title } from "../../../styles/helpers";
import TimeAgo from "react-timeago";
import { formatter } from "../../../utils/agoPtFormat";
import { AiOutlineCheck } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { BsCheckAll } from "react-icons/bs";

interface DetailsProps {
    orderDetail: {
        id: number;
        user: {
            id: number;
            name: string;
        };
        classID: number;
        date: string;
        platformId: number;
        classDuration: string;
        userAccount: string | null;
        classPrice: number;
        isOrderAproved: boolean;
        hasTutorConfirmedClassDone: boolean;
        hasUserConfirmedClassDone: boolean;
        isPaid: boolean;
        paymentDetails: string;
        createdAt: string;
        updatedAt: string;
    };
}

const Details: React.FC<DetailsProps> = ({ orderDetail }) => {
    const { id, classID, createdAt, isOrderAproved, isPaid } = orderDetail;
    const [{ data, fetching, error }] = useSingleClassQuery({
        variables: { id: classID },
    });

    return (
        <OrderDetails>
            <Title fontWeight="400">Checkout</Title>
            <PreTitle>{id}</PreTitle>

            <div className="detail__class">
                <PreTitle color="#696969">Aula</PreTitle>
                {fetching ? (
                    <p>-</p>
                ) : (
                    <>
                        <h3>{data.singleClass.name}</h3>
                        <Description color="#696969">
                            {data.singleClass.description}
                        </Description>
                    </>
                )}
            </div>
            <div className="detail__moreInfo">
                <PreTitle color="#696969">Informações</PreTitle>
                <h4>
                    Agendamento feito
                    <TimeAgo
                        date={Number(createdAt)}
                        formatter={formatter}
                        live={true}
                    />
                </h4>

                <ul>
                    <li>
                        <div className="moreInfo__aproved">
                            {isOrderAproved ? (
                                <BsCheckAll size={24} color="#57CC99" />
                            ) : (
                                <FaTimes size={24} color="#fb475e" />
                            )}

                            <p>
                                {isOrderAproved
                                    ? "Aula aprovada pelo tutor"
                                    : "Aguardando aprovação do tutor!"}
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="moreInfo__aproved">
                            {isPaid ? (
                                <AiOutlineCheck size={24} color="#57CC99" />
                            ) : (
                                <FaTimes size={24} color="#fb475e" />
                            )}

                            <p>
                                {isPaid ? "Pago :)" : "Aguardando pagamento!"}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </OrderDetails>
    );
};
export default Details;
