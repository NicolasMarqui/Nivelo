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
import { useSingleTutorQuery } from "../../../generated/graphql";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { useRouter } from "next/router";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import BackButton from "../../../components/BackButton";
import { getCompletedClasses } from "../../../utils/getCompletedClasses";

const Tutor = () => {
    const router = useRouter();
    const [{ data, fetching }] = useSingleTutorQuery({
        variables: { id: parseInt(router.query.id as string) },
    });
    const [agendarOpen, setAgendarOpen] = useState(false);

    const handleOpenSide = () => {
        setAgendarOpen(!agendarOpen);
    };

    const handleCloseSide = () => {
        setAgendarOpen(!agendarOpen);
        document.body.className = "";
    };

    return (
        <>
            {fetching ? (
                <p>loading</p>
            ) : !fetching &&
              data &&
              data.singleTutor.errors === null &&
              data.singleTutor.tutor ? (
                <PageWrapper pTop="110px">
                    <Meta
                        title={`Tutor - ${checkIfUndefined(
                            data.singleTutor.tutor.user.name
                        )}`}
                        description={`Encontre os melhores tutores para te ajudar nessa jornada - ${checkIfUndefined(
                            data.singleTutor.tutor.description
                        )}`}
                        keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
                    />
                    <Banner>
                        <Overlay border="37px" />
                    </Banner>
                    <Container>
                        <StickyContainer>
                            <SingleTutorWrapper>
                                <div className="st__first">
                                    {data.singleTutor.tutor.user.avatar ? (
                                        <Image
                                            src={
                                                data.singleTutor.tutor.user
                                                    .avatar
                                            }
                                            width={120}
                                            height={120}
                                            className="tutor__avatar"
                                        />
                                    ) : (
                                        <img
                                            src="https://picsum.photos/200"
                                            width={120}
                                            height={120}
                                            className="tutor__avatar"
                                        />
                                    )}
                                    <div className="first__rating">
                                        <MdStar size={24} color="yellow" />
                                        <MdStar size={24} color="yellow" />
                                        <MdStar size={24} color="yellow" />
                                        <MdStar size={24} color="yellow" />
                                        <MdStarBorder size={24} />
                                    </div>
                                    <div className="first__type">
                                        <Pill>
                                            {checkIfUndefined(
                                                data.singleTutor.tutor.type.name
                                            )}
                                        </Pill>
                                    </div>
                                </div>
                                <div className="st__second">
                                    <div className="second__bread">
                                        <BackButton />
                                        <Breadcumb
                                            color="#fff"
                                            data={tutorBreadcumb(
                                                checkIfUndefined(
                                                    data.singleTutor.tutor.user
                                                        .name
                                                )
                                            )}
                                        />
                                    </div>
                                    <div className="second__info">
                                        <TutorTitle>
                                            {checkIfUndefined(
                                                data.singleTutor.tutor.user.name
                                            )}
                                        </TutorTitle>
                                        <TutorSubtitle>
                                            Ensina <span>Javascript</span> e
                                            <span>algoritimos</span>
                                        </TutorSubtitle>
                                        <Description
                                            fontSize="14px"
                                            marginTop={14}
                                            size="70"
                                        >
                                            {checkIfUndefined(
                                                data.singleTutor.tutor
                                                    .description
                                            )}
                                        </Description>

                                        <div className="second__since">
                                            <MdRecordVoiceOver size={24} />
                                            <p>
                                                Tutor Nivelo desde
                                                <span>09/10/2022</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="second__classes second__section">
                                        <TutorTitle>
                                            Aulas disponíveis
                                        </TutorTitle>
                                        <div className="classes__detail detail__ball1"></div>
                                        <div className="classes__detail detail__ball2"></div>
                                        <div className="classes__detail detail__ball3"></div>
                                        {data.singleTutor.tutor.classes &&
                                        data.singleTutor.tutor.classes.length >
                                            0 ? (
                                            data.singleTutor.tutor.classes.map(
                                                (aula) => (
                                                    <ClassItem
                                                        key={aula.id}
                                                        fromInside
                                                        // @ts-ignore
                                                        class={aula}
                                                    />
                                                )
                                            )
                                        ) : (
                                            <p>
                                                Esse tutor ainda não possui
                                                nenhuma aula!
                                            </p>
                                        )}
                                    </div>

                                    <div className="second__informations second__section">
                                        <TutorTitle>Informações</TutorTitle>

                                        <div className="informations__wrapper">
                                            <InfoCard
                                                color="rgba(255, 67, 56, 0.72)"
                                                number={getCompletedClasses(
                                                    data.singleTutor.tutor
                                                        .classes
                                                )}
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
                                        <FeedbackItem
                                            content="teste"
                                            user="teste"
                                        />
                                        <FeedbackItem
                                            content="teste"
                                            user="teste"
                                        />
                                        <FeedbackItem
                                            content="teste"
                                            user="teste"
                                        />
                                        <FeedbackItem
                                            content="teste"
                                            user="teste"
                                        />
                                    </div>
                                </div>
                                <div className="st__third">
                                    <Sticky topOffset={-160}>
                                        {({ style, isSticky }) => (
                                            <div
                                                className={`third__box ${
                                                    isSticky
                                                        ? "box__sticky"
                                                        : ""
                                                }`}
                                                style={style}
                                            >
                                                <div className="third__prices">
                                                    <h5>
                                                        Preço por hora a partir
                                                        de
                                                    </h5>
                                                    <p className="prices__value">
                                                        R$8.00
                                                    </p>

                                                    <div className="prices__btn">
                                                        <IconButton
                                                            icon={
                                                                <MdEvent
                                                                    size={20}
                                                                />
                                                            }
                                                            text="AGENDAR"
                                                            bColor="#FF928B"
                                                            color="#fff"
                                                            onClick={
                                                                handleOpenSide
                                                            }
                                                        />
                                                        <IconButton
                                                            icon={
                                                                <MdChat
                                                                    size={20}
                                                                />
                                                            }
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
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        eiusmod tempor.
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
                        <Agendar
                            isOpen={agendarOpen}
                            closeAgendar={handleCloseSide}
                        />
                    )}
                </PageWrapper>
            ) : (
                <p>fuck</p>
            )}
        </>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Tutor);
