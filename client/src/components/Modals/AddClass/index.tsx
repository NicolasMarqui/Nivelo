import ModalContainer from "../ModalContainer";
import StepWizard from "react-step-wizard";
import { useState } from "react";
import AddClassForm from "@components/AddClassForm";
import AddPriceForm from "@components/AddPriceForm";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface AddClassProps {}

const AddClass: React.FC<AddClassProps> = ({}) => {
    const [newClassId, setNewClassID] = useState(null);
    const [activeStep, setActiveStep] = useState(1);

    const handleChange = (value: number) => {
        setNewClassID(value);
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">
                Adicionar {activeStep === 1 ? "Aula" : "Horários"}
            </h2>
            <p className="mt-2 text-desc text-center md:text-left">
                {activeStep === 1
                    ? "Cadastre o tipo de aula que você pode ajudar, assim fica mais fácil para o usuário escolher."
                    : "Você pode adicionar vários horários para uma mesma classe"}
            </p>
            <div className="w-full">
                <StepWizard
                    onStepChange={(e) => setActiveStep(e.activeStep)}
                    className="step__class"
                >
                    <AddClassForm handleClassIDChange={handleChange} />
                    <AddPriceForm classID={newClassId} />
                </StepWizard>
            </div>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(AddClass as any);
