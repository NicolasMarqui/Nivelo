import Container from "@components/container";
import Meta from "@components/Meta";
import Availability from "@components/TutorPageComponents/Availability";
import FirstRow from "@components/TutorPageComponents/FirstRow";
import SecondRow from "@components/TutorPageComponents/SecondRow";
import Breadcumb from "@components/UI/Breadcumb";
import useWindowSize from "@hooks/useWindowSize";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { useState } from "react";
import { StickyContainer } from "react-sticky";

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
                        <div className="flex flex-col md:flex-row">
                            <FirstRow />
                            <SecondRow />
                            {width > 1024 ? <Availability /> : ""}
                        </div>
                    </StickyContainer>
                </Container>
            </div>
        </>
    );
};
export default Tutor;
