import Container from "@components/container";
import Meta from "@components/Meta";
import Availability from "@components/TutorPageComponents/Availability";
import AvalClasses from "@components/TutorPageComponents/AvalClasses";
import Feedback from "@components/TutorPageComponents/Feedback";
import Breadcumb from "@components/UI/Breadcumb";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { MdStarBorder, MdRecordVoiceOver } from "react-icons/md";
import { StickyContainer } from "react-sticky";

interface TutorProps {}

const Tutor: React.FC<TutorProps> = ({}) => {
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
                            <div className="flex-none flex flex-col md:self-start justify-center">
                                <img
                                    src="/images/example.jpg"
                                    className="flex-none rounded-full order-2 md:order-1 object-cover h-36 w-36 z-20 -mt-20 border-4 border-orange block self-center"
                                />

                                <div className="flex-1 flex items-center justify-center mt-4 order-3 md:order-2">
                                    <MdStarBorder size={20} />
                                    <MdStarBorder size={20} />
                                    <MdStarBorder size={20} />
                                    <MdStarBorder size={20} />
                                    <MdStarBorder size={20} />
                                </div>
                            </div>

                            <div className="flex-2 md:flex-2 flex flex-col items-center md:items-start px-4 md:px-14">
                                <div className="py-4 z-20 -mt-14 block">
                                    <Breadcumb
                                        list={tutorBreadcumbList}
                                        classes="text-center"
                                    />
                                </div>
                                <h3 className="text-black222 text-xl md:text-3xl font-bold mt-2 md:mt-4">
                                    Nicolas Marqui
                                </h3>
                                <p className="text-sm text-primaryOrange md:-mt-1">
                                    Javascript, Algoritimos
                                </p>

                                <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </p>

                                <div className="mt-5 flex items-center">
                                    <MdRecordVoiceOver size={20} />
                                    <p className="text-sm text-black222 ml-2">
                                        Tutor Nivelo desde
                                        <span className="mx-1 font-bold">
                                            09/10/2022
                                        </span>
                                    </p>
                                </div>
                                <AvalClasses />
                                <Feedback />
                            </div>
                            <Availability />
                        </div>
                    </StickyContainer>
                </Container>
            </div>
        </>
    );
};
export default Tutor;
