import { NextPage } from "next";
import { GetServerSideProps } from "next";
import SideBar from "../../components/DashboardComponents/SideBar";
import { useMeQuery } from "../../generated/graphql";
import {
    PageWrapper,
    Container,
    Description,
    Title,
} from "../../styles/helpers";
import {
    DasboardColumnWrapper,
    DashboardWrapper,
    TitleArea,
} from "./Dashboard.style";
import Meta from "../../components/Meta";

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
                            bgColor="#ff4338"
                        >
                            <SideBar user={data.me} />
                        </DasboardColumnWrapper>
                        <DasboardColumnWrapper size={3}>
                            <TitleArea>
                                <Title fontWeight="400">
                                    Olá, {data.me.name}
                                </Title>
                                <Description marginTop={20}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Iste praesentium debitis,
                                    quo, aliquid alias voluptatibus repellendus
                                    et asperiores repellat cumque consectetur?
                                    Similique officia ad atque soluta voluptas
                                    eos commodi dolores?
                                </Description>
                            </TitleArea>
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
