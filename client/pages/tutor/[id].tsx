import Container from "@components/container";
import Meta from "@components/Meta";
import Breadcumb from "@components/UI/Breadcumb";
import useWindowSize from "@hooks/useWindowSize";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { useEffect, useState } from "react";
import { StickyContainer } from "react-sticky";
import Side from "@components/UI/Side";
import {
    useMeSimplifiedQuery,
    useSingleTutorQuery,
} from "src/generated/graphql";
import { useRouter } from "next/router";
import LoaderTutorPage from "@components/UI/Skeletons/LoaderTutorPage";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import { Reoverlay } from "reoverlay";

import FirstRow from "@components/TutorPageComponents/FirstRow";
import SecondRow from "@components/TutorPageComponents/SecondRow";
import Availability from "@components/TutorPageComponents/Availability";
import AvailabilityMobile from "@components/TutorPageComponents/AvailabilityMobile";
import Agendar from "@components/Agendar";
import EmptyAnimation from "@components/UI/EmptyAnimation";

interface TutorProps {}

const Tutor: React.FC<TutorProps> = ({}) => {
    const router = useRouter();
    const { width } = useWindowSize();
    const [agendarOpen, setAgendarOpen] = useState(false);
    const [{ data: meData, fetching: meFetching }] = useMeSimplifiedQuery();

    const [{ data, fetching, error }] = useSingleTutorQuery({
        variables: { id: parseInt(router.query.id as string) },
    });

    const handleAgendar = (value: boolean) => setAgendarOpen(value);

    useEffect(() => {
        document.querySelector("body").classList.remove("overflow-hidden");
    }, []);

    useEffect(() => {
        if (router.query.agendar && data) {
            setAgendarOpen(true);
        }
        Reoverlay.hideAll();
    }, [router.query, data]);

    return (
        <>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            {fetching || error ? (
                <LoaderTutorPage />
            ) : !data || !data.singleTutor || data.singleTutor.errors ? (
                <EmptyAnimation />
            ) : (
                <div className="relative">
                    <div className="w-full h-52 relative bg-banner_t bg-bannerInterno bg-cover bg-no-repeat z-10">
                        <div className="absolute inset-0 bg-overlay"></div>
                        <div className="md:hidden absolute inset-topMobBread flex justify-center right-0 left-0">
                            <Breadcumb
                                list={tutorBreadcumbList(
                                    data.singleTutor.tutor !== null
                                        ? data.singleTutor.tutor.user.name
                                        : "-"
                                )}
                                classes="text-center text-sm"
                            />
                        </div>
                    </div>

                    <Container classes="px-3">
                        <StickyContainer>
                            <div className="flex flex-col md:flex-row">
                                <FirstRow
                                    type={data.singleTutor.tutor.type.name}
                                    avatar={data.singleTutor.tutor.user.avatar}
                                    name={
                                        data.singleTutor.tutor
                                            ? data.singleTutor.tutor.user.name
                                            : "-"
                                    }
                                    rating={data.singleTutor.tutor.rating}
                                />
                                <SecondRow
                                    name={
                                        data.singleTutor.tutor
                                            ? data.singleTutor.tutor.user.name
                                            : "-"
                                    }
                                    description={
                                        data.singleTutor.tutor.description
                                    }
                                    id={data.singleTutor.tutor.id}
                                    categories={
                                        data.singleTutor.tutor.categories
                                    }
                                    createdAt={data.singleTutor.tutor.createdAt}
                                    // @ts-ignore
                                    classes={data.singleTutor.tutor.classes}
                                />
                                {width > 1024 ? (
                                    <Availability
                                        tutorId={data.singleTutor.tutor.id}
                                        // @ts-ignore
                                        classes={data.singleTutor.tutor.classes}
                                        setAgendarOpen={handleAgendar}
                                        isAgendarOpen={agendarOpen}
                                    />
                                ) : (
                                    <AvailabilityMobile
                                        tutorId={data.singleTutor.tutor.id}
                                        // @ts-ignore
                                        classes={data.singleTutor.tutor.classes}
                                        setAgendarOpen={handleAgendar}
                                        isAgendarOpen={agendarOpen}
                                    />
                                )}
                            </div>
                        </StickyContainer>
                    </Container>
                </div>
            )}

            {agendarOpen && (
                <Side
                    isOpen={agendarOpen}
                    handleClose={() => setAgendarOpen(!agendarOpen)}
                    position="bottom"
                    header={{ title: "Agendamento" }}
                >
                    <Agendar
                        tutor={
                            data && data.singleTutor
                                ? data.singleTutor.tutor
                                : null
                        }
                    />
                </Side>
            )}
        </>
    );
};
export default withUrqlClient(createUrqlClient, { ssr: false })(Tutor);
