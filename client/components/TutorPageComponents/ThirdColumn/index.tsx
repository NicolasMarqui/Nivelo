import { Sticky } from "react-sticky";
import IconButton from "../../IconButton";
import { MdChat, MdEvent } from "react-icons/md";
import { Divider, Description } from "../../../styles/helpers";
import {
    getLowestValueArray,
    getLowestValueArrayClasses,
} from "../../../utils/getLowestValueArray";
import CustomCalendarTutor from "../../CalendarTutor";

interface ThirdColumnProps {
    handleAgendar: any;
    data: any;
}

const ThirdColumn: React.FC<ThirdColumnProps> = ({
    handleAgendar,
    data,
}: ThirdColumnProps) => {
    console.log(data.singleTutor.tutor.classes);
    return (
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
                                R$
                                {
                                    getLowestValueArrayClasses(
                                        data.singleTutor.tutor.classes
                                    ).price
                                }
                                .00
                            </p>

                            <div className="prices__btn">
                                <IconButton
                                    icon={<MdEvent size={20} />}
                                    text="AGENDAR"
                                    bColor="#FF928B"
                                    color="#fff"
                                    onClick={handleAgendar}
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

                            <div className="schedule__dates">
                                <CustomCalendarTutor
                                    tutorId={data.singleTutor.tutor.id}
                                    smaller={true}
                                    isTutorDashView={false}
                                />
                            </div>

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
    );
};
export default ThirdColumn;
