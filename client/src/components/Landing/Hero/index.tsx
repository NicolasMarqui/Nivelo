import Container from "@components/container";
import Search from "@components/Search";
import ImagesHero from "@components/UI/ImagesHero";
import Title from "@components/UI/Title";
import { MdExpandMore } from "react-icons/md";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
    return (
        <div className="h-full md:h-screen border-b-2 border-gray-200 mt-10 md:mt-0">
            <Container classes="h-full px-4">
                <div className="flex flex-col md:flex-row items-center justify-between h-full">
                    <div className="flex-1 md:flex-2">
                        <Title classes="text-center md:text-left md:text-heroSize md:w-2/3">
                            Aprenda com os melhores
                        </Title>
                        <p className="text-center md:text-left text-gray-500 md:w-3/4 mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </p>

                        <Search />

                        <div className="mt-9 flex cursor-pointer justify-center md:justify-start">
                            <MdExpandMore size={20} />
                            <p className="font-bold ml-1 text-sm">Saiba mais</p>
                        </div>
                    </div>
                    <div className="flex-1 md:flex-1.5">
                        <ImagesHero />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Hero;
