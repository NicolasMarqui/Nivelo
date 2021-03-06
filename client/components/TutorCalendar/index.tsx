import { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { TutorCalendarWrapper } from "./TutorCalendar.style";
import axios from "axios";

const locales = {
    "pt-BR": require("date-fns/locale/pt-BR"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

interface TutorCalendarProps {
    id: number;
}

const TutorCalendar: React.FC<TutorCalendarProps> = ({ id }) => {
    const [daysAv, setDaysAv] = useState([]);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentIt, setCurrentIt] = useState(0);

    useEffect(() => {
        getAvailableDates();
    }, []);

    const getAvailableDates = async () => {
        await axios
            .get(
                `http://localhost:4000/api/schedule/single/${Number(
                    id
                )}?month=${
                    currentMonth < 10 ? `0${currentMonth}` : currentMonth
                }`
            )
            .then((response) => {
                if (response.data.data) {
                    setDaysAv(response.data.data.dates);
                } else {
                    setDaysAv([]);
                }
            });
    };

    const customDayPropGetter = (date: any) => {
        console.log(daysAv[0].date);

        if (date.getDate() === new Date(daysAv[0].date).getMonth() + 1) {
            return {
                className: "available-day",
                style: { backgroundColor: "#57CC99" },
            };
        } else return {};
    };

    const customSlotPropGetter = (date) => {
        if (date.getDate() === 7 || date.getDate() === 15)
            return {
                className: "special-day",
            };
        else return {};
    };

    return (
        <TutorCalendarWrapper>
            <Calendar
                events={daysAv}
                localizer={localizer}
                culture="pt-BR"
                selectable
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                dayPropGetter={customDayPropGetter}
                slotPropGetter={customSlotPropGetter}
            />
        </TutorCalendarWrapper>
    );
};
export default TutorCalendar;
