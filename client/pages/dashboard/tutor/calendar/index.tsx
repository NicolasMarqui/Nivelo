import { GetServerSideProps, NextPage } from "next";
import BackButton from "../../../../components/BackButton";
import CustomCalendar from "../../../../components/Calendar";
import TutorCalendar from "../../../../components/TutorCalendar";
import { useSingleTutorQuery } from "../../../../generated/graphql";
import { Description, Title } from "../../../../styles/helpers";
import { ColumnGroup, TitleArea } from "../../Dashboard.style";

interface CalendarProps {
    tutorID: number;
}

const Calendar: NextPage<CalendarProps> = (props) => {
    const [{ data, fetching }] = useSingleTutorQuery({
        variables: { id: Number(props.tutorID) },
    });

    return (
        <>
            <ColumnGroup margin="0">
                <TitleArea margin="0 30px">
                    <BackButton bgColor="#8390FA" color="#fff" />
                    <Title fontWeight="400">Tutor - Calendário</Title>
                    <Description marginTop={20}>
                        Aqui você pode marcar quais dias e horários você está
                        disponivel para ensinar, além de, ver suas próximas
                        aulas!
                    </Description>
                </TitleArea>
                <CustomCalendar />
            </ColumnGroup>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookie = ctx.req.cookies.qid;
    const tutorCookie = ctx.req.cookies.tid;

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination:
                    "/login?message=Você precisa estar logado para acessar essa página",
            },
        };
    }

    if (!tutorCookie || tutorCookie === "") {
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
