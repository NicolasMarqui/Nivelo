import { MdChat, MdEvent } from "react-icons/md";
//prettier-ignore
import {getLowestValueArrayClasses} from "../../../utils/getLowestValueArray";
import IconButton from "../../IconButton";
import { Reoverlay } from "reoverlay";
import { SiGooglecalendar } from "react-icons/si";
import DisponibilidadeModal from "../../Modals/DisponibilidadeModal";

interface ThirdColumnMobileProps {
    handleAgendar: any;
    data: any;
}

const ThirdColumnMobile: React.FC<ThirdColumnMobileProps> = ({
    handleAgendar,
    data,
}: ThirdColumnMobileProps) => {
    const handleModal = () =>
        Reoverlay.showModal(DisponibilidadeModal, {
            tutorID: data.singleTutor.tutor.id,
        });

    return (
        <div className="st__third__mobile">
            <div className="third__prices__mobile">
                <h5>Preço por hora: </h5>
                <p className="prices__value">
                    R$
                    {
                        getLowestValueArrayClasses(
                            data.singleTutor.tutor.classes
                        ).price
                    }
                    .00
                </p>
            </div>
            <div className="prices__btn__mobile">
                <IconButton
                    icon={<MdEvent size={20} />}
                    bColor="#FF928B"
                    color="#fff"
                    onClick={handleAgendar}
                />
                <IconButton
                    icon={<MdChat size={20} />}
                    bColor="#68E1FD"
                    color="#fff"
                />
                <IconButton
                    icon={<SiGooglecalendar size={20} />}
                    bColor="#57CC99"
                    color="#fff"
                    onClick={handleModal}
                />
            </div>
        </div>
    );
};
export default ThirdColumnMobile;
