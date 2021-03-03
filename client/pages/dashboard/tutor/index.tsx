import { GetServerSideProps, NextPage } from "next";
import BackButton from "../../../components/BackButton";
import ShortcutList from "../../../components/ShortcutList";
import { useMeQuery, useSingleTutorQuery } from "../../../generated/graphql";
// prettier-ignore
import { Description, Title } from "../../../styles/helpers";
// prettier-ignore
import { ColumnGroup, TitleArea } from "../Dashboard.style";
import Lottie from "react-lottie";
import NoClasses from "../../../components/NoClasses";

interface AccountProps {
    tutorID: number;
}

const Tutor: NextPage<AccountProps> = (props) => {
    const [{ data, fetching }] = useSingleTutorQuery({
        variables: { id: Number(props.tutorID) },
    });
    const LOADING__ANIMATION = require("../../../public/assets/animations/loading.json");

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
            <ColumnGroup>
                <TitleArea margin="0 30px">
                    <Title fontWeight="400">Suas Aulas</Title>
                    {fetching ? (
                        <Lottie
                            options={{
                                loop: true,
                                animationData: LOADING__ANIMATION,
                            }}
                            height={150}
                            width={150}
                        />
                    ) : !data.singleTutor.tutor ||
                      !data.singleTutor.tutor.classes ||
                      data.singleTutor.tutor.classes.length === 0 ? (
                        <NoClasses />
                    ) : (
                        <p>Has</p>
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
