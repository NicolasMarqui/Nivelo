import { UOrdersProps } from "@types";
import TimeAgo from "react-timeago";
import { formatter } from "@utils/agoPtFormat";
import {
    useMakeOrderApprovedMutation,
    useMakeTutorConfirmDoneMutation,
    useIncreaseTotalTaughtMutation,
} from "src/generated/graphql";
import toast from "react-hot-toast";
import { FcApproval } from "react-icons/fc";

interface OrdersTutorProps {
    order: UOrdersProps;
}

const OrdersTutor: React.FC<OrdersTutorProps> = ({ order }) => {
    const [, makeOrderApproved] = useMakeOrderApprovedMutation();
    const [{ fetching }, tutorDone] = useMakeTutorConfirmDoneMutation();
    const [, increaseTotal] = useIncreaseTotalTaughtMutation();

    const {
        classPrice,
        id,
        classes,
        createdAt,
        isOrderAproved,
        hasTutorConfirmedClassDone,
        hasUserConfirmedClassDone,
        date,
        platformId,
        user,
        horario,
    } = order;

    const handleAprovar = async () => {
        const response = await makeOrderApproved({ orderID: order.id });

        if (response.data && response.data.makeOrderApproved !== undefined) {
            toast.success("Pedido de aula aprovado!");
        } else {
            toast.error("Algo deu errado...Tente novamente!");
        }
    };

    const handleConfirmTutor = async () => {
        const response = await tutorDone({ orderID: order.id });
        await increaseTotal({ classID: classes.id });

        if (response.data && response.data.makeTutorConfirmDone !== undefined) {
            toast.success("Você confirmou que ensinou a aula!");
        } else {
            toast.error("Algo deu errado...Tente novamente!");
        }
    };

    return (
        <div className="my-5 bg-white rounded-3xl py-6 px-7 flex flex-col md:flex-row items-center">
            <div className="flex-1">
                <p className="text-primaryOrange text-xs text-center md:text-left">
                    {id}
                </p>
                <h3 className="text-lg text-center md:text-left font-semibold md:text-2xl">
                    {classes.name}
                </h3>
                <p className="text-gray-500 text-xs">
                    Agendamento feito
                    <TimeAgo
                        date={Number(createdAt)}
                        formatter={formatter}
                        live={true}
                        style={{ marginLeft: 5 }}
                    />
                </p>

                <h4 className="mt-4">
                    Aluno:{" "}
                    <span className="text-indigo-500 underline">
                        {user.name}
                    </span>
                </h4>

                <h4 className="font-bold text-center md:text-left">
                    Dia: <span className="text-primaryOrange">{date}</span>
                </h4>
                <h4 className="font-bold text-center text-base md:text-left">
                    Horário:{" "}
                    <span className="text-primaryOrange">{horario || "-"}</span>
                </h4>

                <div className="mt-4">{}</div>
            </div>
            <div className="flex-none justify-items-end flex items-center flex-col my-3 md:my-0">
                <div className="flex-1">
                    <h4 className="text-base text-center md:text-right md:text-lg">
                        Valor:{" "}
                        <span className="text-primaryOrange text-lg md:text-xl font-semibold">
                            R$ {classPrice}
                        </span>
                    </h4>
                </div>
                <div className="flex items-center justify-center">
                    {!isOrderAproved && !hasTutorConfirmedClassDone ? (
                        <button
                            className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                            onClick={handleAprovar}
                        >
                            Confirmar recebimento do pagamento
                        </button>
                    ) : !hasTutorConfirmedClassDone ? (
                        <button
                            className="w-full p-3 mt-4 bg-primaryPurple text-white rounded shadow hover:bg-lightPurple"
                            onClick={handleConfirmTutor}
                        >
                            {fetching
                                ? "Carregando..."
                                : "Confirmar que a aula foi ensinada"}
                        </button>
                    ) : (
                        <div className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">
                            Aula finalizada!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default OrdersTutor;
