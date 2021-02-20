import BackButton from "../../BackButton";
import { checkIfUndefined } from "../../../utils/checkIfUndefined";
import Breadcumb from "../../Breadcumb";
import { tutorBreadcumb } from "../../../utils/breadcumbs";
import { TutorTitle, TutorSubtitle } from "../../TutorCard/TutorCard.style";
import { Description } from "../../../styles/helpers";
import { MdRecordVoiceOver } from "react-icons/md";
import ClassItem from "../../ClassItem";
import InfoCard from "../../InfoCard";
import { getCompletedClasses } from "../../../utils/getCompletedClasses";
import Feedback from "../../Feedback";

interface SecondColumnProps {
    data: any;
}

const SecondColumn: React.FC<SecondColumnProps> = ({
    data,
}: SecondColumnProps) => {
    return (
        <div className="st__second">
            <div className="second__bread">
                <BackButton />
                <Breadcumb
                    color="#fff"
                    data={tutorBreadcumb(
                        checkIfUndefined(data.singleTutor.tutor.user.name)
                    )}
                />
            </div>
            <div className="second__info">
                <TutorTitle>
                    {checkIfUndefined(data.singleTutor.tutor.user.name)}
                </TutorTitle>
                <TutorSubtitle>
                    Ensina <span>Javascript</span> e<span>algoritimos</span>
                </TutorSubtitle>
                <Description fontSize="14px" marginTop={14} size="70">
                    {checkIfUndefined(data.singleTutor.tutor.description)}
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
                <TutorTitle>Aulas disponíveis</TutorTitle>
                <div className="classes__detail detail__ball1"></div>
                <div className="classes__detail detail__ball2"></div>
                <div className="classes__detail detail__ball3"></div>
                {data.singleTutor.tutor.classes &&
                data.singleTutor.tutor.classes.length > 0 ? (
                    data.singleTutor.tutor.classes.map((aula) => (
                        <ClassItem
                            key={aula.id}
                            fromInside
                            // @ts-ignore
                            class={aula}
                        />
                    ))
                ) : (
                    <p>Esse tutor ainda não possui nenhuma aula!</p>
                )}
            </div>

            <div className="second__informations second__section">
                <TutorTitle>Informações</TutorTitle>

                <div className="informations__wrapper">
                    <InfoCard
                        color="rgba(255, 67, 56, 0.72)"
                        number={getCompletedClasses(
                            data.singleTutor.tutor.classes
                        )}
                        text="Aulas completadas"
                    />

                    <InfoCard color="#57CC99" number={100} text="Alunos" />

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
                <Feedback tutorId={data.singleTutor.tutor.id} />
            </div>
        </div>
    );
};
export default SecondColumn;
