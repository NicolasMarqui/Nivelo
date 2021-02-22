import { useRouter } from "next/router";
import { useState } from "react";
import { withUrqlClient } from "next-urql";
import { StickyContainer } from "react-sticky";
import LoaderTutorPage from "../../../components/Skeletons/LoaderTutorPage";
import { useSingleTutorQuery } from "../../../generated/graphql";
import { Container, Overlay, PageWrapper } from "../../../styles/helpers";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { Banner, SingleTutorWrapper } from "./TutorID.style";

import FirstColumn from "../../../components/TutorPageComponents/FirstColumn";
import SecondColumn from "../../../components/TutorPageComponents/SecondColumn";
import ThirdColumn from "../../../components/TutorPageComponents/ThirdColumn";
import Agendar from "../../../components/Agendar";
import Meta from "../../../components/Meta";
import NotFound from "../../../components/NotFound";

const Tutor = () => {
    const router = useRouter();
    const [{ data, fetching }] = useSingleTutorQuery({
        variables: { id: parseInt(router.query.id as string) },
    });
    const [agendarOpen, setAgendarOpen] = useState(false);

    const handleOpenSide = () => {
        setAgendarOpen(!agendarOpen);
    };

    const handleCloseSide = () => {
        setAgendarOpen(!agendarOpen);
        document.body.className = "";
    };

    return (
        <>
            {fetching ? (
                <LoaderTutorPage />
            ) : // prettier-ignore
            !fetching && data && data.singleTutor.errors === null && data.singleTutor.tutor ? (
                <PageWrapper pTop="110px">
                    <Meta
                        title={`Tutor - ${checkIfUndefined(
                            data.singleTutor.tutor.user.name
                        )}`}
                        description={`Encontre os melhores tutores para te ajudar nessa jornada - ${checkIfUndefined(
                            data.singleTutor.tutor.description
                        )}`}
                        keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
                    />
                    <Banner>
                        <Overlay border="37px" />
                    </Banner>
                    <Container>
                        <StickyContainer>
                            <SingleTutorWrapper>
                                <FirstColumn data={data} />
                                <SecondColumn data={data} />
                                <ThirdColumn handleAgendar={handleOpenSide} data={data}/>
                            </SingleTutorWrapper>
                        </StickyContainer>
                    </Container>
                    {agendarOpen && (
                        <Agendar
                            isOpen={agendarOpen}
                            closeAgendar={handleCloseSide}
                            tutor={data.singleTutor.tutor}
                        />
                    )}
                </PageWrapper>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tutor);
