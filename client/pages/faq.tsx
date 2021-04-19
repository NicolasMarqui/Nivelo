import Container from "@components/container";
import FaqContent from "@components/FaqContent";
import Meta from "@components/Meta";
import BackButton from "@components/UI/BackButton";
import Title from "@components/UI/Title";
import { createUrqlClient } from "@utils/createUrqlClient";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withUrqlClient } from "next-urql";

const Faq: React.FC = ({}) => {
    return (
        <>
            <Meta
                title="F.A.Q"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />

            <Container>
                <div className="flex flex-col mt-14 items-center ">
                    <BackButton />
                    <Title classes="text-center  md:text-heroSize text-white z-10 text-black222">
                        F.A.Q
                    </Title>
                </div>

                <FaqContent />
            </Container>
        </>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ["faq"])),
    },
});

export default withUrqlClient(createUrqlClient)(Faq);
