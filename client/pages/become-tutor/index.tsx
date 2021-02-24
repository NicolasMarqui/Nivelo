import { NextPage, GetServerSideProps } from "next";
import BecomeExplanation from "../../components/BecomeTutorComponents/BecomeExplanation";
import LoginForm from "../../components/LoginForm";
import Meta from "../../components/Meta";
import { Container, PageWrapper } from "../../styles/helpers";
import { DasboardColumnWrapper } from "../dashboard/Dashboard.style";
import { Banner } from "../tutor/[id]/TutorID.style";

interface BecomeTutorProps {
    logged: boolean;
}

const BecomeTutor: NextPage<BecomeTutorProps> = ({ logged }) => {
    return (
        <PageWrapper pTop="113px">
            <Meta
                title="Se torne um tutor"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Banner />
            <Container flex>
                <DasboardColumnWrapper
                    size={3}
                    margin="-133px 20px 0 0"
                    bgColor="#f2f2f2"
                >
                    {logged ? <BecomeExplanation /> : <LoginForm />}
                </DasboardColumnWrapper>
                <DasboardColumnWrapper
                    size={1}
                    fixedSize
                    margin="20px 20px 0 0"
                    bgColor="transparent"
                >
                    Sidebar
                </DasboardColumnWrapper>
            </Container>
        </PageWrapper>
    );
};
export default BecomeTutor;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const cookie = ctx.req.cookies.qid;

    return { props: { logged: cookie ? true : false } };
};
