import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import useWindowSize from "@hooks/useWindowSize";
import Image from "next/image";
import List4u from "../List4u";

interface Categories4uProps {}

const Categories4u: React.FC<Categories4uProps> = ({}) => {
    const { width } = useWindowSize();

    return (
        <Section>
            <Container classes="z-20 relative">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1.5 md:-mt-24 md:ml-8">
                        <Image
                            src="/images/categories.jpg"
                            width={width > 1024 ? 451 : "100vw"}
                            height={width > 1024 ? 893 : 200}
                            className="rounded-lg object-cover"
                        />
                    </div>
                    <div className="flex-2">
                        <PreTitle classes="text-center md:text-left">
                            O melhor do ensino
                        </PreTitle>
                        <Title classes="text-center md:text-left md:text-6xl md:w-3/4">
                            Categorias que combinam com você
                        </Title>

                        <List4u />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
export default Categories4u;
