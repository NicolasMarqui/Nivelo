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
            <ClassItem />
            <ClassItem />
            <ClassItem />
            <ClassItem />

            <StepButtons>
                <IconButton
                    color="#fff"
                    text="ANTERIOR"
                    bColor="#4895EF"
                    onClick={() => goToStep(3)}
                />
                <IconButton
                    color="#fff"
                    bColor="#57CC99"
                    text="FINALIZAR"
                    onClick={() => console.log("done")}
                />
            </StepButtons>
        </StepWrapper>
    );
}
