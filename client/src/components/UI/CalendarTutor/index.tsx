import { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import * as dateFns from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import ReactTooltip from "react-tooltip";
import { Reoverlay } from "reoverlay";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { getMonth } from "@utils/getMonth";
import useAxios from "axios-hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import TutorHours from "@components/Modals/TutorHours";
import { FcApproval } from "react-icons/fc";
import { useTheme } from "next-themes";

interface CustomCalendarTutorProps {
    isTutorDashView?: Boolean;
    tutorId: number;
    smaller?: boolean;
    isAgendando?: boolean;
    handleAgendado?: (i: any) => any;
    isShowHours?: boolean;
    selectedDay?: string;
}

const CustomCalendarTutor: React.FC<CustomCalendarTutorProps> = ({
    isTutorDashView,
    tutorId,
    smaller = false,
    isAgendando = false,
    handleAgendado,
    isShowHours = false,
    selectedDay,
}) => {
    const router = useRouter();
    const { theme } = useTheme();

    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [{ data, loading, error }, refetch] = useAxios({
        method: "GET",
        url: `${
            process.env.NEXT_PUBLIC_URL_NORMAL || "http://localhost:4000/"
        }api/schedule/single/${tutorId}?month=${
            getMonth(currentMonth) < 10
                ? `0${getMonth(currentMonth)}`
                : getMonth(currentMonth)
        }`,
    });

    const [
        { data: saveAvalData, loading: saveAvalLoad, error: saveAvalError },
        executePost,
    ] = useAxios({
        method: "POST",
        url: `${
            process.env.NEXT_PUBLIC_URL_NORMAL || "http://localhost:4000/"
        }api/schedule/available/${tutorId}`,
    });

    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div
                    className="col col-start"
                    data-tip="Mês anterior"
                    data-for="prev"
                >
                    <MdChevronLeft
                        size={24}
                        color={theme === "dark" ? "#fff" : "#000"}
                        onClick={prevMonth}
                    />
                    <ReactTooltip
                        effect="solid"
                        place={smaller ? "top" : "left"}
                        id="prev"
                    />
                </div>
                <div className="col col-center">
                    <span className="header__span dark:text-black222">
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
                    <MdChevronRight
                        size={24}
                        color={theme === "dark" ? "#fff" : "#000"}
                        onClick={nextMonth}
                    />
                    <ReactTooltip
                        id="next"
                        effect="solid"
                        place={smaller ? "top" : "right"}
                    />
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

                const hasTrue = handleEvent(day) as boolean[];

                days.push(
                    <div
                        className={`col cell relative ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : ""
                        } ${
                            hasTrue.includes(true) ? "has__event" : "no__event"
                        }`}
                        key={day as any}
                        onClick={() =>
                            onDateClick(dateFns.parse("", "", cloneDay))
                        }
                        data-tip={
                            isTutorDashView
                                ? `${
                                      hasTrue.includes(true)
                                          ? "Clique para editar disponibilidade"
                                          : "Clique para marcar como disponível"
                                  }`
                                : ""
                        }
                    >
                        <span className="number dark:text-black222">
                            {formattedDate}
                        </span>
                        <span className="bg">{formattedDate}</span>
                        {isAgendando &&
                            selectedDay ===
                                dateFns.format(day, "dd/MM/yyyy") && (
                                <div className="dayIsSelected">
                                    <FcApproval size={smaller ? 20 : 60} />
                                </div>
                            )}
                        {isTutorDashView && <ReactTooltip effect="solid" />}
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

    const handleEvent = (day: Date) => {
        if (loading) {
            return [false];
        }

        if (!data || data.data === null || data.data.dates.length === 0) {
            return [false];
        }

        return data.data.dates.map((ev) => {
            if (dateFns.format(day, "dd/MM/yyyy") === ev.date) {
                return true;
            }
        });
    };

    const onDateClick = async (day: Date) => {
        setSelectedDate(day);

        if (isAgendando) {
            if (
                (handleEvent(day).includes(true) && new Date() < day) ||
                dateFns.format(new Date(), "dd/MM/yyyy") ===
                    dateFns.format(day, "dd/MM/yyyy")
            ) {
                handleAgendado(dateFns.format(day, "dd/MM/yyyy"));
            } else if (new Date() > day) {
                return handleAgendado("notOld");
            } else {
                return handleAgendado("not");
            }
        }

        if (isShowHours && handleEvent(day).includes(true)) {
            Reoverlay.showModal(TutorHours, {
                tutorId,
                day: dateFns.format(day, "dd-MM-yyyy"),
            });
        }

        if (!isTutorDashView) return false;

        if (handleEvent(day).includes(true)) {
            router.push(
                `/dashboard/tutor/date/${tutorId}/${dateFns.format(
                    day,
                    "dd-MM-yyyy"
                )}`
            );
        } else if (
            dateFns.format(new Date(), "dd/MM/yyyy") <=
            dateFns.format(day, "dd/MM/yyyy")
        ) {
            await executePost({
                data: {
                    month:
                        getMonth(currentMonth) < 10
                            ? `0${getMonth(currentMonth)}`
                            : getMonth(currentMonth),
                    date: dateFns.format(day, "dd/MM/yyyy").toString(),
                },
            });

            if (!saveAvalLoad && saveAvalData) {
                await refetch();
                toast.success("Dia adicionado como disponível");
            }
        } else {
            toast.error("Me empresta a máquina do tempo ai!");
        }
    };

    const nextMonth = () => {
        setCurrentMonth(dateFns.addMonths(currentMonth, 1));
    };

    const prevMonth = () => {
        setCurrentMonth(dateFns.subMonths(currentMonth, 1));
    };

    if (loading) {
        return <LoadingAnimation />;
    }

    if (error) {
        return <h2>Algo deu errado...</h2>;
    }

    return (
        <div>
            <div className={`calendar mt-2 ${smaller ? "smaller" : ""}`}>
                {renderHeader()}
                {!smaller && renderDays()}
                {renderCells()}
            </div>
        </div>
    );
};
export default CustomCalendarTutor;
