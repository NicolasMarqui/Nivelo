import { useState } from "react";
import Side from "../Side";
import { AgendarWrapper } from "./Agendar.style";
import StepWizard from "react-step-wizard";
import NavWizard from "../NavWizard";
import StepOne from "../Steps/StepOne";
import StepTwo from "../Steps/StepTwo";
import StepThree from "../Steps/StepThree";
import StepFour from "../Steps/StepFour";
import IconButton from "../IconButton";
import Select from "react-select";
import countries from "../../utils/countries.json";
import { Description, SampleDiv } from "../../styles/helpers";

interface AgendarProps {
    isOpen: boolean;
    closeAgendar: () => any;
    tutor: any;
}

interface ClassnameProps {
    id?: number | null;
    name: string;
}

export default function Agendar({ isOpen, closeAgendar, tutor }: AgendarProps) {
    const [className, setClassName] = useState<ClassnameProps>({ name: "-" });
    const [classPrice, setClassPrice] = useState(0);
    const [schedule, setSchedule] = useState(null);
    const [tool, setTool] = useState("");

    const { classes, user } = tutor;

    const handleClassName = (value: any) => setClassName(value);

    return (
        <Side
            isOpen={isOpen}
            left
            width="50%"
            header={{}}
            onClickClose={closeAgendar}
        >
            <AgendarWrapper>
                <div className="agendar__header">
                    <h3>Agendar aula</h3>
                    <p>
                        Tutor: <span>{user.name}</span>
                    </p>
                </div>
                <div className="agendar__group">
                    <h4>Tipo de aula</h4>
                    <Description fontSize="14px" size="60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione aliquam ullam mollitia enim accusantium deserunt
                        sunt autem molestias ab architecto?
                    </Description>
                    <Select
                        closeMenuOnSelect={true}
                        placeholder="Selecione a aula"
                        onChange={(e: any) =>
                            setClassName({ id: e.id, name: e.label })
                        }
                        options={classes.map((c: any) => {
                            return {
                                label: c.name,
                                value: c.name.toLowerCase(),
                                id: c.id,
                            };
                        })}
                    />
                </div>
                <div className="agendar__group">
                    <h4>Tipo de aula</h4>
                    <Description fontSize="14px" size="60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione aliquam ullam mollitia enim accusantium deserunt
                        sunt autem molestias ab architecto?
                    </Description>
                    <Select
                        closeMenuOnSelect={true}
                        placeholder="Valores"
                        onChange={(e: any) => setClassName(e.value)}
                        options={classes.map((c: any) => {
                            return {
                                label: c.name,
                                value: c.name.toLowerCase(),
                            };
                        })}
                    />
                </div>
                <div className="agendar__group">
                    <h4>Disponibilidade</h4>
                    <Description fontSize="14px" size="60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione aliquam ullam mollitia enim accusantium deserunt
                        sunt autem molestias ab architecto?
                    </Description>
                    <SampleDiv />
                </div>
                <div className="agendar__group">
                    <h4>Plataforma</h4>
                    <Description fontSize="14px" size="60">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione aliquam ullam mollitia enim accusantium deserunt
                        sunt autem molestias ab architecto?
                    </Description>
                    <Select
                        closeMenuOnSelect={true}
                        placeholder="Selecione a aula"
                        onChange={(e: any) => setClassName(e.value)}
                        options={classes.map((c: any) => {
                            return {
                                label: c.name,
                                value: c.name.toLowerCase(),
                            };
                        })}
                    />
                </div>
                <div className="agenda__footer">
                    <div className="footer__price">
                        <h6>R${classPrice}.00</h6>
                    </div>
                    <div className="footer__done">
                        <IconButton
                            text="FINALIZAR"
                            bColor="#57CC99"
                            color="#fff"
                        />
                    </div>
                </div>
            </AgendarWrapper>
        </Side>
    );
}
