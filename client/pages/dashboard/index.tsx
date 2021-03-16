import { useEffect } from "react";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import UserClasses from "../../components/DashboardComponents/UserClasses";
import PlatformList from "../../components/PlatformsList";
import { useMeQuery } from "../../generated/graphql";
// prettier-ignore
import { Description, FormLabel, Pill, PillButton, Title } from "../../styles/helpers";
// prettier-ignore
import { ColumnGroup, PlatformsWrapper, TitleArea } from "./Dashboard.style";
import toast from "react-hot-toast";
import UserOrders from "../../components/DashboardComponents/UserOrders";
import IconButton from "../../components/IconButton";
import UserShortcutList from "../../components/UserShortcutList";
import LoadingAnimation from "../../components/LoadingAnimation";

interface DashboardProps {
    logged: boolean;
    cookie: string;
}

const Dashboard: NextPage<DashboardProps> = (props) => {
    const [{ data, fetching, error }] = useMeQuery();
    const router = useRouter();

    useEffect(() => {
        checkIfMessage();
    }, [router.query.message]);

    const checkIfMessage = () => {
        if (router.query.message) {
            toast.error(router.query.message as string);
        }
    };

    if (fetching) {
        return <LoadingAnimation />;
    }
    if (error) router.push("/login");

    return (
        <>
            <ColumnGroup margin="0">
                <TitleArea>
                    <Title fontWeight="400">Olá, {data.me.name}</Title>
                    <Description marginTop={20}>
                        Bem vindo a sua dashboard, aqui você pode fazer
                        alterações em sua conta, ver suas aulas e seus tutor, e
                        seu calendário
                    </Description>
                </TitleArea>
                {/* <PlatformsWrapper>
                    <FormLabel>
                        Adicione sua plataforma de preferência
                    </FormLabel>
                    <PlatformList user={data.me.userPlatformAccount} />
                </PlatformsWrapper> */}
                <PlatformsWrapper>
                    <FormLabel>Ações rápidas</FormLabel>
                    <UserShortcutList isTutor={!!data.me.tutor} />
                </PlatformsWrapper>
            </ColumnGroup>
            <ColumnGroup>
                <TitleArea>
                    <Title fontWeight="400">Suas próximas aulas!</Title>
                    <Description marginTop={20}>
                        Bem vindo a sua dashboard, aqui você pode fazer
                        alterações em sua conta, ver suas aulas e seus tutor, e
                        seu calendário
                    </Description>
                    <UserClasses />
                </TitleArea>
            </ColumnGroup>
            <ColumnGroup id="pedidos">
                <TitleArea>
                    <Title fontWeight="400">Seus Pedidos</Title>
                    <Description marginTop={20}>
                        Aqui você pode ver o status de seus agendamentos
                    </Description>
                </TitleArea>
                <PlatformsWrapper>
                    <UserOrders id={data.me.id} />
                </PlatformsWrapper>
            </ColumnGroup>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookie = ctx.req.cookies.qid;

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    return { props: { logged: true, cookie } };
};

export default Dashboard;
