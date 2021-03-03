import cookieCutter from "cookie-cutter";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import { ModalWrapper, Reoverlay } from "reoverlay";
import { useNewTutorMutation } from "../../../generated/graphql";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { AnimationWrapper } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface ConfirmTutorProps {
    user: any;
}

const ConfirmTutor: React.FC<ConfirmTutorProps> = ({ user }) => {
    const [, newTutor] = useNewTutorMutation();
    const router = useRouter();

    const LOADING__ANIMATION = require("../../../public/assets/animations/loading.json");

    useEffect(() => {
        window.setTimeout(userToTutor, 2000);
    }, []);

    const userToTutor = async () => {
        const response = await newTutor();

        if (response.data.newTutor.errors) {
            toast.error("Tente novamente!");
            toast.error(response.data.newTutor.errors[0].message);
            Reoverlay.hideModal();
        } else if (response.data.newTutor.tutor) {
            cookieCutter.set("tid", response.data.newTutor.tutor.id, {
                expires: 1000 * 60 * 60 * 24 * 365 * 10,
            });
            toast.success("Bem vindo ao Nivelo!");
            router.push("/dashboard/tutor?welcome=true");
        }
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Aguarde</TutorTitle>
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
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(ConfirmTutor as any);
