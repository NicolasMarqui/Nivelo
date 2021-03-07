import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { ModalContainer } from "../Modals.style";
// prettier-ignore
import { Alert, AnimationWrapper, Button, Description, Flex} from "../../../styles/helpers";
import format from "date-fns/format";

interface AvailableDayHoursProps {
    day: Date;
    isCurrentAvailable: boolean;
}

const AvailableDayHours: React.FC<AvailableDayHoursProps> = ({
    day,
    isCurrentAvailable,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [horarios, setHorarios] = useState([]);

    const formattedDay = format(day, "dd/MM/yyyy");

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleAvail = () => {
        console.log("yes");
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Disponibilidade - {formattedDay}</TutorTitle>
                <Description>
                    Escolha os horários que você está disponivel no dia
                    {formattedDay}
                </Description>
                {isCurrentAvailable && <p>Tirar disponivel</p>}
                <Flex justifyCenter>
                    <Button
                        onClick={handleAvail}
                        width="100px"
                        margin="10px"
                        bgColor="#57CC99"
                        color="#fff"
                        notActive={isLoading}
                    >
                        Salvar
                    </Button>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                        Cancelar
                    </Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(AvailableDayHours as any);
