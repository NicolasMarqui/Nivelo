import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdExpandMore, MdPlayCircleOutline } from "react-icons/md";
import useSmoothScroll from "react-smooth-scroll-hook";
import useWindowSize from "../../../hooks/useWindowSize";
// prettier-ignore
import {Container,Description,Flex,Overlay,Title,} from "../../../styles/helpers";
// prettier-ignore
import {CTA,HeroImage,HeroWrapper,SearchCategory} from "../../../styles/Home.styles";
import CategoriesSeach from "../../CategoriesSearch";

interface HeroProps {
    isCategoryVisible: boolean;
    categoryVisible: any;
}

const Hero: React.FC<HeroProps> = ({
    isCategoryVisible,
    categoryVisible,
}: HeroProps) => {
    const router = useRouter();
    const { width } = useWindowSize();

    return (
        <HeroWrapper>
            <Container flex f_center changeToCol>
                <Flex col mr={50}>
                    <img
                        src="/assets/pattern.png"
                        alt="Pattern"
                        className="detail__dots"
                    />
                    <Title fontSize="70px" fontWeight="400">
                        Aprenda com os
                        <span className="has__border">melhores</span>
                    </Title>
                    <Description
                        size={width < 1024 ? "100" : "70"}
                        marginTop={30}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                    </Description>

                    <SearchCategory
                        onClick={() => categoryVisible(!isCategoryVisible)}
                    >
                        <p className="category__label">
                            Escolha a categoria que deseja aprender
                            <MdExpandMore size={18} />
                        </p>
                        <div className="category__search">
                            <Link href="/tutors">
                                <a>
                                    <AiOutlineSearch size={20} color="#fff" />
                                </a>
                            </Link>
                        </div>

                        <CategoriesSeach
                            isVisible={isCategoryVisible}
                            position="bottom"
                        />
                    </SearchCategory>
                </Flex>
                <Flex>
                    {width > 1024 && (
                        <HeroImage>
                            <img
                                src="/assets/hat.svg"
                                className="detail__hat"
                                alt="hat"
                            />
                            <Overlay border="34px" />
                            <MdPlayCircleOutline size={70} color="#fff" />
                            <div className="detail__img img_1"></div>
                            <div className="detail__img img_2"></div>
                            <div className="detail__img img_3"></div>
                            <img
                                src="/assets/pattern.png"
                                alt="Pattern"
                                className="detail__dots"
                            />
                        </HeroImage>
                    )}
                </Flex>
                <CTA onClick={() => router.push("#vantagens")}>
                    <MdExpandMore size={22} />
                    <p>Saiba mais</p>
                </CTA>
            </Container>
        </HeroWrapper>
    );
};
export default Hero;
