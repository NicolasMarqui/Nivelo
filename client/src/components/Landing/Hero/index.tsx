import Container from "@components/container";
import Search from "@components/Search";
import ImagesHero from "@components/UI/ImagesHero";
import Title from "@components/UI/Title";
import { MdExpandMore } from "react-icons/md";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
    return (
        <div className="relative border-b-2 border-gray-200 heroHeight md:mt-4">
            <Container classes="h-full px-4 z-2">
                <div className="flex flex-col md:flex-row items-center justify-center h-full">
                    <div className="flex items-center flex-col justify-center z-10">
                        <Title classes="text-center md:text-heroSize md:w-2/3 text-white mx-auto">
                            Aprenda com os melhores
                        </Title>
                        <p className="text-center mx-auto text-white md:w-2/4 mt-4 md:mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum odio ipsam illum! Earum, nisi.
                        </p>

                        <Search />

                        {/* <div className="mt-9 flex cursor-pointer justify-center md:justify-start">
                            <MdExpandMore size={20} color="#fff" />
                            <p className="font-bold ml-1 text-sm text-white">
                                Saiba mais
                            </p>
                        </div> */}
                    </div>
                    <div className="absolute inset-0 flex-2 overflow-hidden">
                        <ImagesHero />
                    </div>
                </div>
            </Container>
        </div>
    );
};
export default Hero;
