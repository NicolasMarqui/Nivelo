import { withUrqlClient } from "next-urql";
import { ModalWrapper } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import CustomCalendarTutor from "../../CalendarTutor";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { ModalContainer } from "../Modals.style";

interface DisponibilidadeModalProps {
    tutorID: number;
}

const DisponibilidadeModal: React.FC<DisponibilidadeModalProps> = ({
    tutorID,
}) => {
    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Disponibilidade</TutorTitle>
                <CustomCalendarTutor
                    tutorId={tutorID}
                    smaller={true}
                    isTutorDashView={false}
                />
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(DisponibilidadeModal as any);
