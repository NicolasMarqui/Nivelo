import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import useWindowSize from "@hooks/useWindowSize";
import Link from "next/link";
import List4u from "../List4u";

interface Categories4uProps {}

const Categories4u: React.FC<Categories4uProps> = ({}) => {
    const { width } = useWindowSize();

    return (
        <Section classes="z-0">
            <Container classes="z-0 relative border-l-2 border-r-2 border-gray-50">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="flex flex-col flex-2">
                        <PreTitle classes="text-center md:text-left">
                            O melhor do ensino
                        </PreTitle>
                        <Title
                            classes="text-center md:text-left md:text-6xl md:w-3/4"
                            smaller
                        >
                            Categorias que combinam com você
                        </Title>
                    </div>
                    <div className="hidden sm:flex flex-1 justify-end">
                        <Link href="/faq">
                            <a className="w-full md:w-1/3 text-center cursor-pointer  p-3 mt-4 bg-primaryOrange text-white rounded shadow hover:bg-lightOrange">
                                Saiba mais
                            </a>
                        </Link>
                    </div>
                </div>

                <List4u />
            </Container>
        </Section>
    );
};
export default Categories4u;
