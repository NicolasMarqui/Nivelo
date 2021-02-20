import { useState } from "react";
import {
    Container,
    Description,
    Flex,
    Overlay,
    PreTitle,
    Section,
    Title,
} from "../styles/helpers";
import {
    Box,
    CTA,
    Hero,
    HeroImage,
    ImageInfo,
    Parte,
    SearchCategory,
} from "../styles/Home.styles";
import { AiOutlineSearch } from "react-icons/ai";
import {
    MdExpandMore,
    MdPlayCircleOutline,
    MdRecordVoiceOver,
} from "react-icons/md";
import Meta from "../components/Meta";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useCategoriesQuery } from "../generated/graphql";
import Link from "next/link";
import CategoriesSeach from "../components/CategoriesSearch";

const Home = () => {
    const [{ data }] = useCategoriesQuery();
    const [searchBoxOpen, setIsSearchBoxOpen] = useState(false);

    return (
        <>
            <Meta
                title="Home"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Hero>
                <Container flex f_center>
                    <CTA>
                        <MdExpandMore size={22} />
                        <p>Saiba mais</p>
                    </CTA>
                    <Flex col mr={50}>
                        <img
                            src="/assets/pattern.png"
                            alt="Pattern"
                            className="detail__dots"
                        />
                        <Title fontSize="70px" fontWeight="400">
                            Aprenda com os{" "}
                            <span className="has__border">melhores</span>
                        </Title>
                        <Description size="70" marginTop={30}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam
                        </Description>

                        <SearchCategory
                            onClick={() => setIsSearchBoxOpen(!searchBoxOpen)}
                        >
                            <p className="category__label">
                                Escolha a categoria que deseja aprender
                                <MdExpandMore size={18} />
                            </p>
                            <div className="category__search">
                                <Link href="/tutors">
                                    <AiOutlineSearch size={20} color="#fff" />
                                </Link>
                            </div>

                            <CategoriesSeach
                                isVisible={searchBoxOpen}
                                position="bottom"
                            />
                        </SearchCategory>
                    </Flex>
                    <Flex>
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
                    </Flex>
                </Container>
            </Hero>
            <Section>
                <Container flex>
                    <Flex>
                        <ImageInfo>
                            <div className="info__detail detail_1"></div>
                            <div className="info__detail detail_2"></div>
                        </ImageInfo>
                    </Flex>
                    <Flex size={2}>
                        <Parte>
                            <PreTitle>O melhor do ensino</PreTitle>
                            <Title fontSize="60px" fontWeight="400">
                                Venha fazer parte desse ensino
                            </Title>

                            <div className="parte__boxes">
                                <Box>
                                    <div className="box__icon">
                                        <MdRecordVoiceOver
                                            size={24}
                                            color="#FF4338"
                                        />
                                    </div>
                                    <div className="box__info">
                                        <h6>Aprenda com os melhores</h6>
                                        <Description color="#646464">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore.
                                        </Description>
                                    </div>
                                </Box>
                                <Box>
                                    <div className="box__icon">
                                        <MdRecordVoiceOver
                                            size={24}
                                            color="#68E1FD"
                                        />
                                    </div>
                                    <div className="box__info">
                                        <h6>Aprenda com os melhores</h6>
                                        <Description color="#646464">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore.
                                        </Description>
                                    </div>
                                </Box>
                                <Box>
                                    <div className="box__icon">
                                        <MdRecordVoiceOver
                                            size={24}
                                            color="#57CC99"
                                        />
                                    </div>
                                    <div className="box__info">
                                        <h6>Aprenda com os melhores</h6>
                                        <Description color="#646464">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore.
                                        </Description>
                                    </div>
                                </Box>
                                <Box>
                                    <div className="box__icon">
                                        <MdRecordVoiceOver
                                            size={24}
                                            color="#F4D35E"
                                        />
                                    </div>
                                    <div className="box__info">
                                        <h6>Aprenda com os melhores</h6>
                                        <Description color="#646464">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore.
                                        </Description>
                                    </div>
                                </Box>
                            </div>
                        </Parte>
                    </Flex>
                </Container>
            </Section>
            <Section>
                <Container>
                    <PreTitle>Categorias</PreTitle>
                    <Title fontSize="60px" fontWeight="400" size={51}>
                        Categorias que combinam com você
                    </Title>
                    {!data ? (
                        <p>Niente</p>
                    ) : (
                        data.allCategories.map((cat) => cat.name)
                    )}
                </Container>
            </Section>
            <Section>
                <PreTitle center>Diferentes tipos de profissionais</PreTitle>
                <Title fontSize="60px" fontWeight="400" size={50} center m_auto>
                    Profissionais qualificados para te ajudar
                </Title>
            </Section>
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
