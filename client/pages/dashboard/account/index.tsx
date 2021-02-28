import { NextPage } from "next";
import { GetServerSideProps } from "next";
import SideBar from "../../../components/DashboardComponents/SideBar";
import { useMeQuery } from "../../../generated/graphql";
// prettier-ignore
import { PageWrapper, Container, Description, Title } from "../../../styles/helpers";
// prettier-ignore
import { DasboardColumnWrapper, DashboardWrapper, TitleArea} from "../Dashboard.style";
import Meta from "../../../components/Meta";
import AccountForm from "../../../components/DashboardComponents/AccountForm";
import BackButton from "../../../components/BackButton";
import Breadcumb from "../../../components/Breadcumb";
import { dashBoardAccountBread } from "../../../utils/breadcumbs";

interface AccountProps {
    logged: boolean;
    cookie: string;
}

const Account: NextPage<AccountProps> = (props) => {
    const [{ data, fetching }] = useMeQuery();

    return (
        <PageWrapper>
            <Meta
                title={`Minha conta - ${fetching ? "" : data.me.name}`}
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
                        <DasboardColumnWrapper size={3} bgColor="#ffff">
                            <TitleArea margin="0 30px">
                                <BackButton bgColor="#8390FA" color="#fff" />
                                {/* <Breadcumb data={dashBoardAccountBread} /> */}
                                <Title fontWeight="400" margin="10px 0 0 0">
                                    Editar sua conta
                                </Title>
                            </TitleArea>
                            <AccountForm user={data.me} />
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

export default Account;
