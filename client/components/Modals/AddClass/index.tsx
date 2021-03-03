import { withUrqlClient } from "next-urql";
import { useState } from "react";
import StepWizard from "react-step-wizard";
import { ModalWrapper } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { Description } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import AddClassForm from "../../AddClassForm";
import AddPriceForm from "../../AddPriceForm";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";

interface AddClassProps {}

const AddClass: React.FC<AddClassProps> = () => {
    const [newClassId, setNewClassID] = useState(null);
    const [activeStep, setActiveStep] = useState(1);

    const handleChange = (value: number) => {
        setNewClassID(value);
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>
                    Adicionar {activeStep === 1 ? "Aula" : "Horários"}
                </TutorTitle>
                <Description>
                    {activeStep === 1
                        ? "Cadastre o tipo de aula que você pode ajudar, assim fica mais fácil para o usuário escolher."
                        : "Você pode adicionar vários horários para uma mesma classe"}
                </Description>
                <StepWizard onStepChange={(e) => setActiveStep(e.activeStep)}>
                    <AddClassForm handleClassIDChange={handleChange} />
                    <AddPriceForm classID={newClassId} />
                </StepWizard>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(AddClass as any);
