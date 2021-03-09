import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons } from "../Steps.style";
import IconButton from "../../IconButton";
import CustomCalendarTutor from "../../CalendarTutor";

interface StepThreeProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
}

export default function StepThree({ goToStep }: StepThreeProps) {
    return (
        <StepWrapper>
            <CustomCalendarTutor tutorId={24} isTutorDashView={false} />
        </StepWrapper>
    );
}
