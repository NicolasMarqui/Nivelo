import ClassItem from "../../ClassItem";
import { StepWrapper, StepButtons, StepDesc } from "../Steps.style";
import IconButton from "../../IconButton";
import CustomCalendarTutor from "../../CalendarTutor";
import { Description } from "../../../styles/helpers";

interface StepThreeProps {
    goToStep?: any;
    totalSteps?: any;
    currentStep?: any;
}

export default function StepThree({ goToStep }: StepThreeProps) {
    return (
        <StepWrapper>
            <CustomCalendarTutor tutorId={24} isTutorDashView={false} />
            <StepDesc>
                <Description color="#696969" fontSize="15px">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam quae nam, quisquam rerum molestiae eius nobis
                    nesciunt, excepturi maxime consequatur officiis adipisci
                    nisi. Eligendi voluptas iure libero repellendus officiis
                    sequi nulla laudantium laboriosam, itaque ex, eveniet cumque
                    nemo. Id, aliquid. Quis, illum quam fugit fugiat blanditiis
                    commodi architecto magnam expedita!
                </Description>
            </StepDesc>
        </StepWrapper>
    );
}
