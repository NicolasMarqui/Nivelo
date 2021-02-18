import { useState } from "react";
import {
    Container,
    Divider,
    Overlay,
    PageWrapper,
} from "../../../styles/helpers";
import { Banner } from "./TutorID.style";
import Meta from "../../../components/Meta";
import { SingleTutorWrapper } from "./TutorID.style";
import Image from "next/image";
import {
    MdStar,
    MdStarBorder,
    MdEvent,
    MdChat,
    MdRecordVoiceOver,
} from "react-icons/md";
import { Description, Pill } from "../../../styles/helpers";
import {
    TutorTitle,
    TutorSubtitle,
} from "../../../components/TutorCard/TutorCard.style";
import { StickyContainer, Sticky } from "react-sticky";
import IconButton from "../../../components/IconButton";
import Breadcumb from "../../../components/Breadcumb";
import { tutorBreadcumb } from "../../../utils/breadcumbs";
import ClassItem from "../../../components/ClassItem";
import InfoCard from "../../../components/InfoCard";
import FeedbackItem from "../../../components/FeedbackItem";
import Agendar from "../../../components/Agendar";

export default function Tutor() {
    const [agendarOpen, setAgendarOpen] = useState(false);

    const handleOpenSide = () => {
        setAgendarOpen(!agendarOpen);
    };

    const handleCloseSide = () => {
        setAgendarOpen(!agendarOpen);
        document.body.className = "";
    };

    return (
        <PageWrapper pTop="110px">
            <Meta
                title={`Tutor - Nicolas Marqui`}
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Banner>
                <Overlay border="37px" />
            </Banner>
            <Container>
                <StickyContainer>
                    <SingleTutorWrapper>
                        <div className="st__first">
                            <Image
                                src="/assets/student.jpg"
                                width={160}
                                height={160}
                                className="tutor__avatar"
                            />
                            <div className="first__rating">
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStar size={24} color="yellow" />
                                <MdStarBorder size={24} />
                            </div>
                            <div className="first__type">
                                <Pill>Professor</Pill>
                                <Pill>Verificado</Pill>
                            </div>
                        </div>
                        <div className="st__second">
                            <div className="second__bread">
                                <Breadcumb
                                    color="#fff"
                                    data={tutorBreadcumb("Nicolas Marqui")}
                                />
                            </div>
                            <div className="second__info">
                                <TutorTitle>Walter White</TutorTitle>
                                <TutorSubtitle>
                                    Ensina <span>Javascript</span> e{" "}
                                    <span>algoritimos</span>
                                </TutorSubtitle>
                                <Description
                                    fontSize="14px"
                                    marginTop={14}
                                    size="70"
                                >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam
                                </Description>

                                <div className="second__since">
                                    <MdRecordVoiceOver size={24} />
                                    <p>
                                        Tutor Nivelo desde{" "}
                                        <span>09/10/2022</span>
                                    </p>
                                </div>
                            </div>

                            <div className="second__classes second__section">
                                <TutorTitle>Aulas disponíveis</TutorTitle>
                                <div className="classes__detail detail__ball1"></div>
                                <div className="classes__detail detail__ball2"></div>
                                <div className="classes__detail detail__ball3"></div>
                                <ClassItem />
                                <ClassItem />
                                <ClassItem />
                                <ClassItem />
                            </div>

                            <div className="second__informations second__section">
                                <TutorTitle>Informações</TutorTitle>

                                <div className="informations__wrapper">
                                    <InfoCard
                                        color="rgba(255, 67, 56, 0.72)"
                                        number={14}
                                        text="Aulas completadas"
                                    />

                                    <InfoCard
                                        color="#57CC99"
                                        number={100}
                                        text="Alunos"
                                    />

                                    <InfoCard
                                        color="#8390FA"
                                        number={14}
                                        text="Aulas completadas"
                                    />
                                    <InfoCard
                                        color="#F4D35E"
                                        number={14}
                                        text="Aulas completadas"
                                    />
                                </div>
                            </div>
                            <div className="second__feedbacks second__section">
                                <TutorTitle>Feedbacks</TutorTitle>
                                <FeedbackItem content="teste" user="teste" />
                                <FeedbackItem content="teste" user="teste" />
                                <FeedbackItem content="teste" user="teste" />
                                <FeedbackItem content="teste" user="teste" />
                            </div>
                        </div>
                        <div className="st__third">
                            <Sticky topOffset={-160}>
                                {({ style, isSticky }) => (
                                    <div
                                        className={`third__box ${
                                            isSticky ? "box__sticky" : ""
                                        }`}
                                        style={style}
                                    >
                                        <div className="third__prices">
                                            <h5>Preço por hora a partir de</h5>
                                            <p className="prices__value">
                                                R$8.00
                                            </p>

                                            <div className="prices__btn">
                                                <IconButton
                                                    icon={<MdEvent size={20} />}
                                                    text="AGENDAR"
                                                    bColor="#FF928B"
                                                    color="#fff"
                                                    onClick={handleOpenSide}
                                                />
                                                <IconButton
                                                    icon={<MdChat size={20} />}
                                                    text="CONTATO"
                                                    bColor="#68E1FD"
                                                    color="#fff"
                                                />
                                            </div>
                                        </div>

                                        <Divider />

                                        <div className="third__schedule">
                                            <h5>Disponibilidade</h5>

                                            <div className="schedule__dates"></div>

                                            <Description fontSize="14px">
                                                Lorem ipsum dolor sit amet,
                                                consectetur eiusmod tempor.
                                            </Description>

                                            <IconButton
                                                text="VERIFICAR DISPONIBILIDADE"
                                                bColor="#57CC99"
                                                color="#fff"
                                            />
                                        </div>
                                    </div>
                                )}
                            </Sticky>
                        </div>
                    </SingleTutorWrapper>
                </StickyContainer>
            </Container>
            {agendarOpen && (
                <Agendar isOpen={agendarOpen} closeAgendar={handleCloseSide} />
            )}
        </PageWrapper>
    );
}
