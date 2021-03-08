import { GetServerSideProps, NextPage } from "next";
import Lottie from "react-lottie";
import BackButton from "../../../components/BackButton";
import LoadingAnimation from "../../../components/LoadingAnimation";
import NoClasses from "../../../components/NoClasses";
import ShortcutList from "../../../components/ShortcutList";
import TutorClassList from "../../../components/TutorClassList";
import TutorMoreInfo from "../../../components/TutorMoreInfo";
// prettier-ignore
import { useSingleTutorQuery } from "../../../generated/graphql";
// prettier-ignore
import { Description, FormLabel, Title } from "../../../styles/helpers";
// prettier-ignore
import { ColumnGroup, TitleArea } from "../Dashboard.style";

interface AccountProps {
    tutorID: number;
}

const Tutor: NextPage<AccountProps> = (props) => {
    const [{ data, fetching }] = useSingleTutorQuery({
        variables: { id: Number(props.tutorID) },
    });

    return (
        <>
            <ColumnGroup margin="0">
                <TitleArea margin="0 30px">
                    <BackButton bgColor="#8390FA" color="#fff" />
                    <Title fontWeight="400">Tutor - Sua área</Title>
                    <Description marginTop={20}>
                        Bem vindo a sua área de tutor, aqui você pode gerenciar
                        suas aulas, seus alunos, suas datas e muito mais!
                    </Description>
                    <ShortcutList />
                </TitleArea>
            </ColumnGroup>
            <ColumnGroup id="info">
                <TitleArea>
                    <Title fontWeight="400">Suas Informações</Title>
                    <Description marginTop={20}>
                        Bem vindo a sua área de tutor, aqui você pode gerenciar
                        suas aulas, seus alunos, suas datas e muito mais!
                    </Description>
                    <TutorMoreInfo loading={fetching} data={data} />
                </TitleArea>
            </ColumnGroup>
            <ColumnGroup id="classes">
                <TitleArea margin="0 30px">
                    <Title fontWeight="400">Suas Aulas</Title>
                    {fetching ? (
                        <LoadingAnimation />
                    ) : !data.singleTutor ||
                      data.singleTutor.tutor.classes.length === 0 ? (
                        <NoClasses />
                    ) : (
                        <TutorClassList
                            classes={data.singleTutor.tutor.classes as any}
                        />
                    )}
                </TitleArea>
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

export default Tutor;
