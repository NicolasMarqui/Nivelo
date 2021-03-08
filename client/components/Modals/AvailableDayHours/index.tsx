import format from "date-fns/format";
import { ModalWrapper } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
import { Description } from "../../../styles/helpers";
import HorariosForm from "../../HorariosForm";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { ModalContainer } from "../Modals.style";

interface AvailableDayHoursProps {
    day: Date;
    isCurrentAvailable: boolean;
}

const AvailableDayHours: React.FC<AvailableDayHoursProps> = ({
    day,
    isCurrentAvailable,
}) => {
    const formattedDay = format(day, "dd/MM/yyyy");

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Disponibilidade - {formattedDay}</TutorTitle>
                <Description>
                    Escolha os horários que você está disponivel no dia
                    <span> {formattedDay}</span>
                </Description>

                {isCurrentAvailable && <p>Tirar disponivel</p>}
                {/* TODO - IMPLEMENT HOURS */}
                {/* <HorariosForm pageProps /> */}
            </ModalContainer>
        </ModalWrapper>
    );
};
export default AvailableDayHours;
