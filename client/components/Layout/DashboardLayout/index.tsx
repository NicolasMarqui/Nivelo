import { createUrqlClient } from "../../../utils/createUrqlClient";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import { withUrqlClient } from "next-urql";
import { useMeQuery } from "../../../generated/graphql";
import { Container, PageWrapper } from "../../../styles/helpers";
import Meta from "../../Meta";
// prettier-ignore
import { DasboardColumnWrapper, DashboardWrapper,} from "../../../pages/dashboard/Dashboard.style";
import SideBar from "../../DashboardComponents/SideBar";
import { GetServerSideProps } from "next";
import useWindowSize from "../../../hooks/useWindowSize";

interface DashboardLayoutProps {
    tutorID?: number;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    const [{ data, fetching }] = useMeQuery();
    const { width } = useWindowSize();
    const isMobile = width < 1024;

    return (
        <>
            <Navbar />
            <div className="body__overlay"></div>
            <PageWrapper pTop={!isMobile ? "" : "0"}>
                <Meta
                    title={`Dashboard - ${
                        fetching
                            ? ""
                            : !data || data === undefined
                            ? ""
                            : data.me.name
                    }`}
                    description="Encontre os melhores tutores para te ajudar nessa jornada"
                    keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
                />
                <Container>
                    {fetching ? (
                        <p>Carregando</p>
                    ) : (
                        <DashboardWrapper>
                            <DasboardColumnWrapper size={1} bgColor="#ffff">
                                <SideBar user={data.me} />
                            </DasboardColumnWrapper>
                            <DasboardColumnWrapper
                                size={3}
                                bgColor="transparent"
                                padding="0 20px"
                                margin={isMobile ? "10px 0 " : ""}
                            >
                                {children}
                            </DasboardColumnWrapper>
                        </DashboardWrapper>
                    )}
                </Container>
            </PageWrapper>
            <Footer />
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

    return { props: { tutorID: Number(tutorCookie) } };
};

export default withUrqlClient(createUrqlClient)(DashboardLayout as any);
