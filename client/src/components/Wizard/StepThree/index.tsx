import CustomCalendarTutor from "@components/UI/CalendarTutor";
import useWindowSize from "@hooks/useWindowSize";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface StepThreeProps {
    nextStep?: any;
    handleScheduleChange?: (i: any) => any;
    tutorID: number;
}

const StepThree: React.FC<StepThreeProps> = ({
    nextStep,
    handleScheduleChange,
    tutorID,
}) => {
    const [selectedDay, setSelectedDay] = useState("");
    const handleDay = (value: any) => {
        setSelectedDay(value);

        if (value === "not") {
            toast.error("Tutor não está disponível nesse dia!");
        } else if (value === "notOld") {
            toast.error("You Viajante no tempo man?????");
        } else if (value !== "") {
            console.log("Here");
            toast.success(`${value} selecionado!`);
            handleScheduleChange(value);
            nextStep();
        }
    };
    const { width } = useWindowSize();

    return (
        <div className="h-full overflow-x-hidden overflow-y-auto md:w-7/12 mx-auto mt-3">
            <CustomCalendarTutor
                tutorId={tutorID}
                isTutorDashView={false}
                isAgendando
                smaller={width > 1024 ? false : true}
                handleAgendado={handleDay}
                selectedDay={selectedDay}
            />
        </div>
    );
};
export default StepThree;
