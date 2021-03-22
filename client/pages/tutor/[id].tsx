import Container from "@components/container";
import Meta from "@components/Meta";
import Breadcumb from "@components/UI/Breadcumb";
import useWindowSize from "@hooks/useWindowSize";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { useState } from "react";
import { StickyContainer } from "react-sticky";
import Side from "@components/UI/Side";

import FirstRow from "@components/TutorPageComponents/FirstRow";
import SecondRow from "@components/TutorPageComponents/SecondRow";
import Availability from "@components/TutorPageComponents/Availability";
import AvailabilityMobile from "@components/TutorPageComponents/AvailabilityMobile";

interface TutorProps {}

const Tutor: React.FC<TutorProps> = ({}) => {
    const { width } = useWindowSize();
    const [agendarOpen, setAgendarOpen] = useState(false);

    return (
        <>
            <Meta
                title="Tutores"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <div className="relative">
                <div className="w-full h-52 relative bg-banner_t bg-bannerInterno bg-cover bg-no-repeat z-10">
                    <div className="absolute inset-0 bg-overlay"></div>
                    <div className="md:hidden absolute inset-topMobBread flex justify-center right-0 left-0">
                        <Breadcumb
                            list={tutorBreadcumbList}
                            classes="text-center text-sm"
                        />
                    </div>
                </div>

                <Container classes="px-3">
                    <StickyContainer>
                        <div
                            className="flex flex-col md:flex-row"
                            onClick={() => setAgendarOpen(true)}
                        >
                            <FirstRow />
                            <SecondRow />
                            {width > 1024 ? (
                                <Availability />
                            ) : (
                                <AvailabilityMobile />
                            )}
                        </div>
                    </StickyContainer>
                </Container>
            </div>

            {agendarOpen && (
                <Side
                    isOpen={agendarOpen}
                    handleClose={() => setAgendarOpen(!agendarOpen)}
                    position="bottom"
                    header={{ title: "Agendamento" }}
                >
                    oi
                </Side>
            )}
        </>
    );
};
export default Tutor;
