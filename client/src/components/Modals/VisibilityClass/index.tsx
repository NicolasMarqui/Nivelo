import toast from "react-hot-toast";
import { useChangeClassStatusMutation } from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface VisibilityClassProps {
    classID: number;
    active: boolean;
}

const VisibilityClass: React.FC<VisibilityClassProps> = ({
    classID,
    active,
}) => {
    const [{ fetching }, changeStatus] = useChangeClassStatusMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const handleAction = async () => {
        const response = await changeStatus({ id: classID, active: !active });

        if (response.data.changeClassStatus.errors) {
            toast.error("Tente novamente!");
            Reoverlay.hideModal();
        } else if (response.data.changeClassStatus.classes) {
            toast.success("Status atualizado!");
            Reoverlay.hideModal();
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-black222">
                Deseja {active ? " desativar" : " ativar"} essa aula?
            </h2>

            {fetching ? (
                <LoadingAnimation />
            ) : (
                <div className="flex flex-col md:flex-row items-center justify-center mt4">
                    <button
                        className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                        onClick={handleAction}
                    >
                        Confirmar
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
export default withUrqlClient(createUrqlClient)(VisibilityClass as any);
