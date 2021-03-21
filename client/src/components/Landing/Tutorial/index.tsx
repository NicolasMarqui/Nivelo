import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";

interface TutorialProps {}

const Tutorial: React.FC<TutorialProps> = ({}) => {
    return (
        <Section>
            <Container classes="px-4">
                <PreTitle classes="text-center md:text-left">Tutorial</PreTitle>
                <Title classes="text-center md:text-left md:text-6xl">
                    Como funciona?
                </Title>
                tutorial here
            </Container>
        </Section>
    );
};
export default Tutorial;
