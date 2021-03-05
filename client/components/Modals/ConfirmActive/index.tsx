import { withUrqlClient } from "next-urql";
import { useState } from "react";
import toast from "react-hot-toast";
import { ModalWrapper, Reoverlay } from "reoverlay";
import { useChangeClassStatusMutation } from "../../../generated/graphql";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { Button, Flex } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import LoadingAnimation from "../../LoadingAnimation";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface ConfirmActiveProps {
    active: boolean;
    classID: number;
}

const ConfirmActive: React.FC<ConfirmActiveProps> = ({ classID, active }) => {
    const [, changeStatus] = useChangeClassStatusMutation();
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleAction = async () => {
        setIsLoading(true);
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
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>
                    Deseja {active ? "Desativar" : "Ativar"} essa aula?
                </TutorTitle>
                {!isLoading ? <></> : <LoadingAnimation />}
                {/* prettier-ignore */}
                <Flex justifyCenter>
                    <Button onClick={handleAction} width="100px" margin="10px" bgColor="#57CC99" color="#fff" bold fSize="18px">
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
export default withUrqlClient(createUrqlClient)(ConfirmActive as any);
