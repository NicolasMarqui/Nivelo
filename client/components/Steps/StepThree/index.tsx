import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useWindowSize from "../../../hooks/useWindowSize";
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
    const { width } = useWindowSize();

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
                smaller={width > 1024 ? false : true}
                handleAgendado={handleDay}
            />
            <StepDesc>
                <Description color="#696969" fontSize="15px">
                    Caso o tutor não tenha marcado nenhum dia como disponível,
                    ou, você não achou nenhum dia que dê certo, entre em contato
                    com o tutor!
                </Description>
            </StepDesc>
        </StepWrapper>
    );
}
