import { useState } from "react";
import { useSingleClassQuery } from "../../../generated/graphql";
import { Detail, Pill, Flex, FormLabel } from "../../../styles/helpers";
import { formatter } from "../../../utils/agoPtFormat";
import LoadingAnimation from "../../LoadingAnimation";
import { UserOrdersListWrapper } from "./UserOrdersList.style";
import TimeAgo from "react-timeago";
import UserOrdersAction from "../UserOrdersAction";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { MdExpandMore } from "react-icons/md";
import UserOrdersDetails from "../UserOrdersDetails";

export interface UserOrdersListProps {
    order: {
        __typename?: string;
        id?: string;
        user?: {
            id?: number;
            name: string;
        };
        classID?: number;
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

const UserOrdersList: React.FC<UserOrdersListProps> = ({ order }) => {
    const [{ data, fetching, error }] = useSingleClassQuery({
        variables: { id: order.classID },
    });

    const [isDetailOpen, setIsDetailOpen] = useState(false);

    if (fetching) {
        return <LoadingAnimation />;
    }

    return (
        <>
            <UserOrdersListWrapper>
                <Flex col align="flex-start" justifyCenter size={2}>
                    <div className="order__title">
                        <p>{order.id}</p>
                        <h2>{data.singleClass.name}</h2>
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

                    <h4 onClick={() => setIsDetailOpen(!isDetailOpen)}>
                        + Detalhes <MdExpandMore size={17} />{" "}
                    </h4>
                </Flex>
                <Flex justifyCenter size={3}>
                    <UserOrdersAction
                        isPaid={order.isPaid}
                        isConfirmed={order.isOrderAproved}
                        hasAlunoConfirmed={order.hasUserConfirmedClassDone}
                    />
                </Flex>
                <Flex justifyCenter col align="center" size={1}>
                    <FormLabel>Valor total: </FormLabel>
                    <TutorTitle>R${order.classPrice}</TutorTitle>
                </Flex>
            </UserOrdersListWrapper>
            <UserOrdersDetails
                isVisible={isDetailOpen}
                classData={data.singleClass}
                allData={order}
            />
        </>
    );
};
export default UserOrdersList;
