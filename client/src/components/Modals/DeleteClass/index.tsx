import React from "react";
import toast from "react-hot-toast";
import { useDeleteClassMutation } from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface DeleteClassProps {
    classID: number;
}

const DeleteClass: React.FC<DeleteClassProps> = ({ classID }) => {
    const [{ fetching }, deleteClass] = useDeleteClassMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const handleDelete = async () => {
        const response = await deleteClass({ id: classID });
        if (!response.data && !response.data.deleteClass) {
            toast.error("Tente novamente");
            Reoverlay.hideModal();
        } else {
            toast.success("Aula deletada!");
            Reoverlay.hideModal();
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-black222">
                Tem certeza que deseja excluir essa aula?
            </h2>

            {fetching ? (
                <LoadingAnimation />
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-center mt4">
                    <button
                        className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                        onClick={handleDelete}
                    >
                        Deletar
                    </button>
                    <button
                        className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-lightOrange md:ml-2"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </div>
            )}
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(DeleteClass as any);
