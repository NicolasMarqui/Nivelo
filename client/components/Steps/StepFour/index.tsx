import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";

interface StepFourProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
}

export default function StepFour({ goToStep }: StepFourProps) {
    return (
        <StepWrapper>
            <p>Hemlo</p>
        </StepWrapper>
    );
}
