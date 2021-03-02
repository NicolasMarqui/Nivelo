import { NextPage } from "next";
import { GetServerSideProps } from "next";
import SideBar from "../../components/DashboardComponents/SideBar";
import { useMeQuery } from "../../generated/graphql";
// prettier-ignore
import { PageWrapper, Container, Description, Title, FormLabel } from "../../styles/helpers";
// prettier-ignore
import { DasboardColumnWrapper, DashboardWrapper, TitleArea, ColumnGroup, PlatformsWrapper} from "./Dashboard.style";
import Meta from "../../components/Meta";
import PlatformList from "../../components/PlatformsList";

interface DashboardProps {
    logged: boolean;
    cookie: string;
}

const Dashboard: NextPage<DashboardProps> = (props) => {
    const [{ data, fetching }] = useMeQuery();

    return (
        <PageWrapper>
            <Meta
                title={`Dashboard - ${fetching ? "" : data.me.name}`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Container>
                {fetching ? (
                    <p>Carregando</p>
                ) : (
                    <DashboardWrapper>
                        <DasboardColumnWrapper
                            size={1}
                            fixedSize
                            bgColor="#ffff"
                        >
                            <SideBar user={data.me} />
                        </DasboardColumnWrapper>
                        <DasboardColumnWrapper
                            size={3}
                            bgColor="transparent"
                            padding="0 20px"
                        >
                            <ColumnGroup margin="0">
                                <TitleArea>
                                    <Title fontWeight="400">
                                        Olá, {data.me.name}
                                    </Title>
                                    <Description marginTop={20}>
                                        Bem vindo a sua dashboard, aqui você
                                        pode fazer alterações em sua conta, ver
                                        suas aulas e seus tutor, e seu
                                        calendário
                                    </Description>
                                </TitleArea>
                                <PlatformsWrapper>
                                    <FormLabel>
                                        Adicione sua plataforma de preferência
                                    </FormLabel>
                                    <PlatformList
                                        user={data.me.userPlatformAccount}
                                    />
                                </PlatformsWrapper>
                            </ColumnGroup>
                            <ColumnGroup>
                                <TitleArea>
                                    <Title fontWeight="400">
                                        Suas próximas aulas
                                    </Title>
                                    <Description marginTop={20}>
                                        Nenhuma aula disponível
                                    </Description>
                                </TitleArea>
                            </ColumnGroup>
                        </DasboardColumnWrapper>
                    </DashboardWrapper>
                )}
            </Container>
        </PageWrapper>
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
