import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Image from "next/image";
import { MdSlowMotionVideo } from "react-icons/md";

const AnyWhere: React.FC = ({}) => {
    return (
        <>
            <Section classes="border-b-2 border-gray-200" hasBgDetail>
                <Container classes="px-4 z-20">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1 order-2 md:pl-20 z-20">
                            <PreTitle classes="text-center md:text-left">
                                Portabilidade
                            </PreTitle>
                            <Title classes="text-center md:text-left md:text-6xl md:w-3/4">
                                Aprenda em qualquer lugar
                            </Title>

                            <div className="flex mt-9 flex-col md:flex-row items-center justify-between">
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        Aprenda com os melhores
                                    </h3>
                                    <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-lg text-center md:text-left">
                                        Aprenda com os melhores
                                    </h3>
                                    <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 flex items-center justify-center md:justify-start flex-col md:flex-row hover:bg-gray-50 rounded-xl cursor-pointer w-auto transform hover:scale-105">
                                <MdSlowMotionVideo size={50} />
                                <h3 className="font-bold text-lg ml-2">
                                    Veja mais sobre nosso sistema
                                </h3>
                            </div>
                        </div>

                        <div className="flex-1 order-1 -mt-32">
                            <Image
                                src="/icons/detailNivelo.svg"
                                width={634}
                                height={779}
                                className="rounded-lg object-cover"
                                alt="ImageDetail"
                            />
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};
export default AnyWhere;
