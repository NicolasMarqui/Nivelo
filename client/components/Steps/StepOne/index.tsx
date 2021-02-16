import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";

interface StepOneProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
    onChange: () => any;
}

export default function StepOne({ goToStep, onChange }: StepOneProps) {
    return (
        <StepWrapper>
            <ClassItem />
            <ClassItem />
            <ClassItem />
            <ClassItem />

            <StepButtons>
                <IconButton
                    color="#fff"
                    bColor="#E76F51"
                    text="PRÓXIMO"
                    onClick={() => goToStep(2)}
                />
            </StepButtons>
        </StepWrapper>
    );
}
