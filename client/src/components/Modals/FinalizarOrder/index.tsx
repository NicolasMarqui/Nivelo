import ModalContainer from "../ModalContainer";
import toast from "react-hot-toast";
import { useNewOrderMutation } from "src/generated/graphql";
import { useRouter } from "next/router";
import { Reoverlay } from "reoverlay";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import LoadingAnimation from "@components/UI/LoadingAnimation";

interface FinalizarOrderProps {
    info?: {
        selectedClass: {
            active: boolean;
            amountTimeTaught: number;
            createdAt: string;
            description: string;
            id: number;
            level: string;
            name: string;
            price: any[];
            updatedAt: string;
        };
        classPrice: {
            id: number;
            price: number;
            time: number;
        };
        classSchedule?: string;
        hour?: {
            id?: string;
            from?: string;
            date?: string;
            to?: string;
            tutorID?: number;
        };
        tool?: {
            id: number;
            name: string;
            icon: string;
        };
        tutorName: string;
    };
    userBuyingID: number | null;
}

const FinalizarOrder: React.FC<FinalizarOrderProps> = ({
    info,
    userBuyingID,
}) => {
    const router = useRouter();
    const [{ fetching, error }, newOrder] = useNewOrderMutation();

    const { selectedClass, classPrice, classSchedule, tool, hour } = info;

    const handleFinalizar = async () => {
        // prettier-ignore
        if ( !selectedClass || Object.keys(classPrice).length === 0 || Object.keys(hour).length === 0  || !classSchedule || !tool) {
            toast.error(
                "Verifique se todas as informações foram preenchidas corretamente!"
            );
            Reoverlay.hideModal();
            return false;
        }

        const response = await newOrder({
            userID: userBuyingID,
            classID: selectedClass.id,
            date: classSchedule,
            classPrice: classPrice.price,
            classDuration: `${classPrice.time}min`,
            platformId: tool.id,
            horario: `A partir de ${hour.from} até ${hour.to}`,
        });

        if (response && response.data.createNewOrder.errors) {
            toast.error("Algo deu errado! Tente Novamente");
            Reoverlay.hideModal();
        } else if (response.data.createNewOrder.order) {
            toast.loading("Por favor aguarde...", { duration: 3000 });
            Reoverlay.hideModal();
            router.push(`/order/${response.data.createNewOrder.order.id}`);
        }
    };

    if (error) {
        toast.error("Algo deu errado! Tente Novamente");
        Reoverlay.hideModal();
    }

    return (
        <ModalContainer>
            <h2 className="text-3xl font-bold text-center md:text-left">
                Verifique as informações
            </h2>

            {fetching ? (
                <LoadingAnimation />
            ) : (
                <>
                    <div className="mt-2">
                        <div className="flex flex-col my-2">
                            <p className={`text-sm`}>Aula Selecionada: </p>
                            <h3 className={`text-lg font-bold`}>
                                {selectedClass ? selectedClass.name : "-"}
                            </h3>
                        </div>
                        <div className="flex flex-col my-2">
                            <p className={`text-sm`}>Opções da aula: </p>
                            <h3 className={`text-lg font-bold`}>
                                {classPrice
                                    ? `${classPrice.time}/min - R$${classPrice.time}`
                                    : "-"}
                            </h3>
                        </div>
                        <div className="flex flex-col my-2">
                            <p className={`text-sm`}>Dia Selecionado: </p>
                            <h3 className={`text-lg font-bold`}>
                                {classSchedule || "-"}
                            </h3>
                        </div>
                        <div className="flex flex-col my-2">
                            <p className={`text-sm`}>
                                Horário de preferência:{" "}
                            </p>
                            <h3 className={`text-lg font-bold`}>
                                {hour ? `${hour.from}-${hour.to}` : "-"}
                            </h3>
                        </div>
                        <div className="flex flex-col my-2">
                            <p className={`text-sm`}>Plataforma escolhida: </p>
                            <h3 className={`text-lg font-bold`}>
                                {tool ? tool.name : "-"}
                            </h3>
                        </div>
                    </div>
                    <button
                        className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                        onClick={handleFinalizar}
                    >
                        Finalizar
                    </button>{" "}
                </>
            )}
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(FinalizarOrder as any);
