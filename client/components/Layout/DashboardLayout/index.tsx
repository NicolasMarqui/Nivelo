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

const DashboardLayout: React.FC = ({ children }) => {
    const [{ data, fetching }] = useMeQuery();

    return (
        <>
            <Navbar />
            <div className="body__overlay"></div>
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
                            <DasboardColumnWrapper size={1} bgColor="#ffff">
                                <SideBar user={data.me} />
                            </DasboardColumnWrapper>
                            <DasboardColumnWrapper
                                size={3}
                                bgColor="transparent"
                                padding="0 20px"
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

export default withUrqlClient(createUrqlClient)(DashboardLayout as any);
