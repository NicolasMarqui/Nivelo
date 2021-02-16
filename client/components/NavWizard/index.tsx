import { renderTitleAgendar } from "../../functions";
import { Title } from "../../styles/helpers";
import IconButton from "../IconButton";
import { TutorTitle } from "../TutorCard/TutorCard.style";
import { Nav, Dot, NavTitle } from "./NavWizard.style";

interface NavWizardProps {
    totalSteps?: any;
    currentStep?: any;
    goToStep?: any;
    lastStep?: any;
    info?: {
        className: String;
        classPrice: Number;
        classSchedule: [any];
        tool: String;
    };
}

export default function NavWizard({ currentStep, info }: NavWizardProps) {
    return (
        <>
            <NavTitle>
                <TutorTitle>{renderTitleAgendar(currentStep)}</TutorTitle>
            </NavTitle>
            <Nav>
                {info && (
                    <div className="nav__info">
                        <div className="info__opt">
                            <ul>
                                <li>
                                    <h5>{info.className}</h5>
                                </li>
                                <li>-</li>
                                <li>
                                    <h5>{info.tool}</h5>
                                </li>
                            </ul>
                        </div>

                        <div className="info__price">
                            <p>R${info.classPrice}</p>
                        </div>
                    </div>
                )}
            </Nav>
        </>
    );
}
