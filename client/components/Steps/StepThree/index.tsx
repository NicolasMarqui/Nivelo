import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";

interface StepThreeProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
}

export default function StepThree({ goToStep }: StepThreeProps) {
    return (
        <StepWrapper>
            <ClassItem />
            <ClassItem />
            <ClassItem />
            <ClassItem />

            <StepButtons>
                <IconButton
                    color="#fff"
                    text="ANTERIOR"
                    bColor="#4895EF"
                    onClick={() => goToStep(2)}
                />
                <IconButton
                    color="#fff"
                    bColor="#E76F51"
                    text="PRÓXIMO"
                    onClick={() => goToStep(4)}
                />
            </StepButtons>
        </StepWrapper>
    );
}
