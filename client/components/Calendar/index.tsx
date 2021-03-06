import { useState } from "react";
import { CalendarWrapper } from "./Calendar.style";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import * as dateFns from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import ReactTooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import AvailableDayHours from "../Modals/AvailableDayHours";

interface CustomCalendarProps {}

const CustomCalendar: React.FC<CustomCalendarProps> = ({}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div
                    className="col col-start"
                    data-tip="Mês anterior"
                    data-for="prev"
                >
                    <MdChevronLeft size={24} onClick={prevMonth} />
                    <ReactTooltip effect="solid" place="left" id="prev" />
                </div>
                <div className="col col-center">
                    <span>
                        {dateFns.format(currentMonth, dateFormat, {
                            locale: ptBr,
                        })}
                    </span>
                </div>
                <div
                    className="col col-end"
                    data-tip="Próximo mês"
                    data-for="next"
                >
                    <MdChevronRight size={24} onClick={nextMonth} />
                    <ReactTooltip id="next" effect="solid" place="right" />
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const dateFormat = "iiii";
        const days = [];
        let startDate = dateFns.startOfWeek(currentMonth);
        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat, {
                        locale: ptBr,
                    })}
                </div>
            );
        }
        return <div className="days row">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;

                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : ""
                        }`}
                        key={day as any}
                        onClick={() =>
                            onDateClick(dateFns.parse("", "", cloneDay))
                        }
                        data-tip="Clique para marcar como disponível"
                    >
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                        <ReactTooltip effect="solid" />
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day as any}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="body">{rows}</div>;
    };

    const onDateClick = (day: Date) => {
        Reoverlay.showModal(AvailableDayHours, { day });
        setSelectedDate(day);
    };

    const nextMonth = () => {
        setCurrentMonth(dateFns.addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(dateFns.subMonths(currentMonth, 1));
    };

    return (
        <CalendarWrapper>
            <div className="calendar">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </div>
        </CalendarWrapper>
    );
};
export default CustomCalendar;
