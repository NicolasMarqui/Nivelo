import { withUrqlClient } from "next-urql";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { Description } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import AddClassForm from "../../AddClassForm";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface AddPriceToClassProps {}

const AddPriceToClass: React.FC<AddPriceToClassProps> = () => {
    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleSalvar = () => {
        console.log("oi");
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Horários</TutorTitle>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur, saepe.
                </Description>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(AddPriceToClass as any);
