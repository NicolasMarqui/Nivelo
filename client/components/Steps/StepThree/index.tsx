import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Description } from "../../../styles/helpers";
import CustomCalendarTutor from "../../CalendarTutor";
import { StepDesc, StepWrapper } from "../Steps.style";

interface StepThreeProps {
    nextStep?: any;
    handleScheduleChange?: (i: any) => any;
    tutorID: number;
}

export default function StepThree({
    nextStep,
    handleScheduleChange,
    tutorID,
}: StepThreeProps) {
    const [selectedDay, setSelectedDay] = useState("");
    const handleDay = (value: any) => setSelectedDay(value);

    useEffect(() => {
        if (selectedDay.includes("not")) {
            toast.error("Tutor não está disponível nesse dia!");
        } else if (selectedDay !== "") {
            toast.success(`${selectedDay} selecionado!`);
            handleScheduleChange(selectedDay);
            nextStep();
        }
    }, [selectedDay]);

    return (
        <StepWrapper>
            <CustomCalendarTutor
                tutorId={tutorID}
                isTutorDashView={false}
                isAgendando
                handleAgendado={handleDay}
            />
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
