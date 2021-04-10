import Container from "@components/container";
import TutorialList from "@components/TutorialList";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import Image from "next/image";

interface TutorialProps {}

const Tutorial: React.FC<TutorialProps> = ({}) => {
    return (
        <Section classes="bg-lightPink overflow-hidden">
            <Container classes="px-4">
                <PreTitle classes="text-center md:text-left">Tutorial</PreTitle>
                <Title classes="text-center md:text-left md:text-6xl">
                    Como funciona?
                </Title>

                <div className="flex flex-col lg:w-2/4">
                    <TutorialList />
                </div>
            </Container>
            <img
                src="/icons/students.svg"
                width={1300}
                height={941}
                className="hidden lg:block absolute -bottom-44 lg:-right-96 2xl:-right-44 3xl:right-0"
            />
        </Section>
    );
};
export default Tutorial;
