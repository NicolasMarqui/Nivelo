import { withUrqlClient } from "next-urql";
import { useState } from "react";
import Lottie from "react-lottie";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { AnimationWrapper, Button, Description, Flex } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface PlatformModalProps {
    platform: { id: number; name: string; icon: string };
    userPlatforms: any;
}

const PlatformModal: React.FC<PlatformModalProps> = ({ platform }) => {
    const [account, setAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const LOADING__ANIMATION = require("../../../public/assets/animations/loading.json");

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleSalvar = () => {
        console.log("oi");
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Plataformas</TutorTitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, saepe.
                </Description>
                {!isLoading ? (
                    <></>
                ) : (
                    <AnimationWrapper>
                        <Lottie
                            options={{
                                loop: true,
                                animationData: LOADING__ANIMATION,
                            }}
                            height={150}
                            width={150}
                        />
                    </AnimationWrapper>
                )}
                {/* prettier-ignore */}
                <Flex justifyCenter>
                    <Button onClick={handleSalvar} width="100px" margin="10px" bgColor="#57CC99" color="#fff" notActive={!account}>
                        Salvar
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
export default withUrqlClient(createUrqlClient)(PlatformModal as any);
