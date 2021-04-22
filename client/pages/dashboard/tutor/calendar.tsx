import CustomCalendarTutor from "@components/UI/CalendarTutor";
import useWindowSize from "@hooks/useWindowSize";
import { GetServerSideProps } from "next";
import cookies from "next-cookies";

interface CalendarProps {
    tutorID: number;
}

const Calendar: React.FC<CalendarProps> = (props) => {
    const { width } = useWindowSize();

    return (
        <div className="relative p-8 bg-gray-50 rounded-3xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">
                Seu
                <span className="text-primaryOrange ml-2">Calendário</span>
            </h2>

            <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur blanditiis velit exercitationem sapiente.
                Cupiditate, dolore dolor vero laudantium harum molestias?
            </p>

            <div className="mt-4">
                <CustomCalendarTutor
                    tutorId={Number(props.tutorID)}
                    isTutorDashView={true}
                    isAgendando={false}
                    smaller={width > 1024 ? false : true}
                />
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx: any) => {
    const cookie = cookies(ctx).qid;
    const tutorCookie = cookies(ctx).tid;

    if (!cookie || cookie === "null") {
        return {
            redirect: {
                permanent: false,
                destination:
                    "/login?message=Você precisa estar logado para acessar essa página",
            },
        };
    }

    if (!tutorCookie || tutorCookie === "" || tutorCookie === "null") {
        return {
            redirect: {
                permanent: false,
                destination: "/dashboard?message=Acesso negado",
            },
        };
    }

    return { props: { tutorID: Number(tutorCookie) } };
};

export default Calendar;
