import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";

interface StepTwoProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
}

export default function StepTwo({ goToStep }: StepTwoProps) {
    return (
        <StepWrapper>
            <ClassItem />

            <StepButtons>
                <IconButton
                    color="#fff"
                    text="ANTERIOR"
                    bColor="#4895EF"
                    onClick={() => goToStep(1)}
                />
                <IconButton
                    color="#fff"
                    bColor="#E76F51"
                    text="PRÓXIMO"
                    onClick={() => goToStep(3)}
                />
            </StepButtons>
        </StepWrapper>
    );
}
