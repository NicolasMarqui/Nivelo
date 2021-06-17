import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import CookieCutter from "cookie-cutter";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { BsFillTrashFill } from "react-icons/bs";
import Tooltip from "react-tooltip";
import {
    useDeleteHourFromTutorMutation,
    useGetTutorsHourQuery,
} from "../../../../src/generated/graphql";
import { Reoverlay } from "reoverlay";
import toast from "react-hot-toast";
import AvailableDayHours from "@components/Modals/AvailableDayHours";

interface TutorDateProps {}

const TutorDate: React.FC<TutorDateProps> = ({}) => {
    const router = useRouter();
    const tutorId = CookieCutter.get("tid") || "";
    const [{ data, fetching, error }] = useGetTutorsHourQuery({
        variables: {
            tutorID: Number(tutorId),
            date: router.query.date[1] as string,
        },
    });
    const [, deleteHour] = useDeleteHourFromTutorMutation();

    if (error) {
        return <EmptyAnimation />;
    }

    if (fetching) {
        return <LoadingAnimation />;
    }

    const handleDelete = async (id: string) => {
        router.push(
            {
                pathname: router.asPath,
            },
            undefined,
            { shallow: true }
        );
        const deleteH = await deleteHour({ id });
        if (deleteH) {
            toast.success("Horário Removido com sucesso");
        }
    };

    return (
        <div className="relative p-8 bg-gray-50 dark:bg-gray-600 rounded-3xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                Suas Informações do dia
                <span className="block text-primaryOrange">
                    {router.query.date[1] || "-"}
                </span>
            </h2>

            <p className="mt-4 text-base text-desc dark:text-gray-400 md:w-4/5 text-center md:text-left">
                Aqui você pode definir os horários que você está disponível
                nesse dia, além de remover como disponivel e afins...
            </p>

            <div className="mt-4">
                <h3 className="text-gray-400 text-center md:text-left">
                    Seus Horários
                </h3>
                {!data || data.getTutorsHour.length === 0 ? (
                    <EmptyAnimation />
                ) : (
                    data.getTutorsHour.map((h) => (
                        <div className="relative" key={h.id}>
                            <div className="flex flex-row items-center justify-between w-full my-2">
                                <div className="w-full md:flex-2 bg-white rounded-xl shadow-sm px-6 py-2 mr-2 md:mr-0">
                                    <p className="text-sm dark:text-black222">
                                        A partir de:{" "}
                                    </p>
                                    <h3 className="text-lg font-bold dark:text-black222">
                                        {h.from}
                                    </h3>
                                </div>
                                <div className="w-full md:flex-2 md:mx-2 bg-white rounded-xl shadow-sm px-6 py-2">
                                    <p className="text-sm dark:text-black222">
                                        Até:{" "}
                                    </p>
                                    <h3 className="text-lg font-bold dark:text-black222">
                                        {h.to}
                                    </h3>
                                </div>
                                <div className="flex-none flex items-center text-center justify-center mt-2 cursor-pointer transform hover:scale-105">
                                    <div
                                        className="w-full flex-1"
                                        onClick={() => handleDelete(h.id)}
                                        data-tip="Remover Horário"
                                        data-for="deleteH"
                                    >
                                        <BsFillTrashFill size={32} />
                                        <Tooltip id="deleteH" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
                <button
                    className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                    onClick={() =>
                        Reoverlay.showModal(AvailableDayHours, {
                            day: router.query.date[1],
                            tutorId: Number(tutorId),
                        })
                    }
                >
                    Adicionar Horário
                </button>
            </div>
        </div>
    );
};
export default withUrqlClient(createUrqlClient)(TutorDate as any);
