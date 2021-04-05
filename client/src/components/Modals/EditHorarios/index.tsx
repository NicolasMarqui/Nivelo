import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import {
    useAllPricesClassQuery,
    useDeletePriceMutation,
} from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import AddHorario from "../AddHorario";
import { BsTrash } from "react-icons/bs";
import Tooltip from "react-tooltip";
import toast from "react-hot-toast";

interface EditHorariosProps {
    classID: number;
}

const EditHorarios: React.FC<EditHorariosProps> = ({ classID }) => {
    const [{ data, fetching, error }] = useAllPricesClassQuery({
        variables: { classID },
    });
    const [{ fetching: fetcDelete }, deletePrice] = useDeletePriceMutation();

    if (error) {
        return <EmptyAnimation />;
    }

    if (fetching || fetcDelete) {
        return <LoadingAnimation />;
    }

    const handleDelete = async (id: number) => {
        const delHour = await deletePrice({ id });

        if (delHour || delHour.data.deletePrice) {
            toast.success("Horário Removido!");
        } else {
            toast.error("Algo deu errado....");
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">Horários</h2>
            {!data || data.allPricesClass.length === 0 ? (
                <EmptyAnimation />
            ) : (
                data.allPricesClass.map((h) => (
                    <div key={h.id} className="flex items-center">
                        <div className="my-3 mx-5 rounded-2xl w-72 border-2 border-gray-100 p-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-black222">Duração de: </h3>
                                <p className="text-black222">{h.time} min</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h3 className="text-black222">Valor de: </h3>
                                <p className="text-primaryOrange font-bold">
                                    R${h.price}
                                </p>
                            </div>
                        </div>
                        <div
                            className="ml-1"
                            data-for="deletHo"
                            data-tip="Remover horário"
                        >
                            <BsTrash
                                size={22}
                                className="cursor-pointer transform hover:scale-105"
                                onClick={() => handleDelete(h.id)}
                            />
                            <Tooltip id="deletHo" effect="solid" />
                        </div>
                    </div>
                ))
            )}

            <div className="h-24 my-2">
                <div
                    className="w-full p-3 mt-4 bg-primaryPurple text-white rounded shadow hover:bg-lightPurple text-center cursor-pointer"
                    onClick={() => Reoverlay.showModal(AddHorario, { classID })}
                >
                    Adicionar novo horário
                </div>
            </div>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(EditHorarios as any);
