import Container from "@components/container";
import PreTitle from "@components/UI/PreTitle";
import Section from "@components/UI/Section";
import Title from "@components/UI/Title";
import TutorCardSmall from "@components/UI/TutorCardSmall";
import { homeBestTutors } from "@utils/sliderSettings";
import Slider from "react-slick";

interface BestTutorsProps {}

const BestTutors: React.FC<BestTutorsProps> = ({}) => {
    return (
        <Section>
            <Container classes="px-4">
                <PreTitle classes="text-center">Os Melhores</PreTitle>
                <Title classes="text-center md:text-6xl md:w-2/5 m-auto">
                    Os melhores tutores
                </Title>

                <div className="mt-10">
                    <Slider {...homeBestTutors}>
                        {new Array(10).fill("-").map((a, idx) => (
                            <TutorCardSmall key={idx} />
                        ))}
                    </Slider>
                </div>
            </Container>
        </Section>
    );
};
export default BestTutors;
