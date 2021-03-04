import { withUrqlClient } from "next-urql";
import { useState } from "react";
import Lottie from "react-lottie";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { AnimationWrapper, Button, Description, Flex } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import LoadingAnimation from "../../LoadingAnimation";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface ConfirmDeleteClassProps {
    platform: { id: number; name: string; icon: string };
    userPlatforms: any;
}

const ConfirmDeleteClass: React.FC<ConfirmDeleteClassProps> = ({
    platform,
}) => {
    const [account, setAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleSalvar = () => {
        console.log("oi");
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Deseja excluir aula?</TutorTitle>
                {!isLoading ? <></> : <LoadingAnimation />}
                {/* prettier-ignore */}
                <Flex justifyCenter>
                    <Button onClick={handleSalvar} width="100px" margin="10px" bgColor="#57CC99" color="#fff" notActive={!account}>
                        Confirmar
                    </Button>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                        Cancelar
                    </Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(ConfirmDeleteClass as any);
