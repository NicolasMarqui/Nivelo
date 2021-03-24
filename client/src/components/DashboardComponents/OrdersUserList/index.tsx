import { UOrdersProps } from "@types";
import { FaTimesCircle } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import OrdersUsersActions from "../OrdersUserActions";

interface OrdersUserListProps {
    order: UOrdersProps;
}

const OrdersUserList: React.FC<OrdersUserListProps> = ({ order }) => {
    const {
        classPrice,
        id,
        classes,
        isPaid,
        isOrderAproved,
        hasUserConfirmedClassDone,
        hasTutorConfirmedClassDone,
    } = order;

    return (
        <div className="my-5 bg-white rounded-3xl p-4 flex flex-col md:flex-row items-center">
            <div className="flex-2">
                <p className="text-primaryOrange text-xs text-center md:text-left">
                    {id}
                </p>
                <h3 className="text-lg text-center md:text-left font-semibold md:text-2xl mb-3">
                    {classes.name}
                </h3>
                <div className="flex flex-col my-5 md:my-0">
                    <div className="flex-1 flex items-center">
                        {isPaid ? (
                            <FcApproval size={20} className="mt-1 mr-2" />
                        ) : (
                            <FaTimesCircle
                                size={20}
                                className="mt-1 mr-2"
                                color="red"
                            />
                        )}
                        {isPaid ? (
                            <p className="text-base text-desc">Pago!</p>
                        ) : (
                            <p className="text-base text-desc">
                                Aguardando pagamento!
                            </p>
                        )}
                    </div>
                    <div className="flex-1 flex items-center">
                        {isOrderAproved ? (
                            <FcApproval size={20} className="mt-1 mr-2" />
                        ) : (
                            <FaTimesCircle
                                size={20}
                                className="mt-1 mr-2"
                                color="red"
                            />
                        )}
                        {isOrderAproved ? (
                            <p className="text-base text-desc">
                                Tutor aprovou a aula!
                            </p>
                        ) : (
                            <p className="text-base text-desc">
                                Tutor ainda não aprovou a aula!
                            </p>
                        )}
                    </div>
                    <div className="flex-1 flex items-center">
                        {hasUserConfirmedClassDone ? (
                            <FcApproval size={20} className="mt-1 mr-2" />
                        ) : (
                            <FaTimesCircle
                                size={20}
                                className="mt-1 mr-2"
                                color="red"
                            />
                        )}
                        {hasUserConfirmedClassDone ? (
                            <p className="text-base text-desc">
                                Você confirmou a finalização da aula!
                            </p>
                        ) : (
                            <p className="text-base text-desc">
                                Você não confirmou a finalização da aula!
                            </p>
                        )}
                    </div>
                    <div className="flex-1 flex items-center">
                        {hasTutorConfirmedClassDone ? (
                            <FcApproval size={20} className="mt-1 mr-2" />
                        ) : (
                            <FaTimesCircle
                                size={20}
                                className="mt-1 mr-2"
                                color="red"
                            />
                        )}
                        {hasTutorConfirmedClassDone ? (
                            <p className="text-base text-desc">
                                Tutor confirmou a finalização da aula!
                            </p>
                        ) : (
                            <p className="text-base text-desc">
                                Tutor não confirmou a finalização da aula!
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center flex-col ">
                <div className="flex-1">
                    <h4 className="text-base text-center md:text-right md:text-lg">
                        Valor:{" "}
                        <span className="text-primaryOrange text-lg md:text-xl font-semibold">
                            R$ {classPrice}
                        </span>
                    </h4>
                </div>
                <OrdersUsersActions
                    isPaid={isPaid}
                    hasUserConfirmedClassDone={hasUserConfirmedClassDone}
                />
            </div>
        </div>
    );
};
export default OrdersUserList;