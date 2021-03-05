import { withUrqlClient } from "next-urql";
import { useState } from "react";
import toast from "react-hot-toast";
import { ModalWrapper, Reoverlay } from "reoverlay";
import { useDeleteClassMutation } from "../../../generated/graphql";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { Button, Description, Flex } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import LoadingAnimation from "../../LoadingAnimation";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface ConfirmDeleteClassProps {
    classID: number;
}

const ConfirmDeleteClass: React.FC<ConfirmDeleteClassProps> = ({ classID }) => {
    const [, deleteClass] = useDeleteClassMutation();
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleDelete = async () => {
        setIsLoading(true);
        const response = await deleteClass({ id: classID });
        console.log(response);
        if (!response.data.deleteClass) {
            toast.error("Tente novamente");
            Reoverlay.hideModal();
        } else {
            toast.success("Aula deletada!");
            Reoverlay.hideModal();
        }
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Deseja excluir aula?</TutorTitle>
                <Description>Essa ação não pode ser desfeita</Description>
                {!isLoading ? <></> : <LoadingAnimation />}
                {/* prettier-ignore */}
                <Flex justifyCenter>
                    <Button onClick={handleDelete} width="100px" margin="10px" bgColor="#57CC99" color="#fff" bold fSize="18px" notActive={isLoading}>
                        Confirmar
                    </Button>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff" bold fSize="18px">
                        Cancelar
                    </Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(ConfirmDeleteClass as any);
