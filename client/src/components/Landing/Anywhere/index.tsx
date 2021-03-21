import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Image from "next/image";

interface AnyWhereProps {}

const AnyWhere: React.FC<AnyWhereProps> = ({}) => {
    return (
        <Section classes="border-b-2 border-gray-200">
            <Container classes="px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1.5">
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
                    </div>

                    <div className="flex-1.5 hidden md:flex -mt-28">
                        <Image
                            src="/images/hero-4.jpg"
                            width={400}
                            height={600}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
export default AnyWhere;
