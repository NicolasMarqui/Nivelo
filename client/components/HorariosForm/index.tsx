import { useState, useEffect } from "react";
// prettier-ignore
import { HorAddMore, HorariosFormWrapper, HorForm, HorFormWrapper, HorDelete } from "./HorariosForm.style";
import { Reoverlay } from "reoverlay";
// prettier-ignore
import { Alert, AnimationWrapper, BoxIcon, Button, Description, Flex, FormGroup, FormInput, FormLabel} from "../../styles/helpers";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import TimePicker from "rc-time-picker";
import { AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import ReactTooltip from "react-tooltip";

interface HorariosFormProps {}

const HorariosForm: React.FC<HorariosFormProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [horarios, setHorarios] = useState([{ from: 0, to: 0 }]);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const handleAvail = () => {
        console.log("yes");
    };

    useEffect(() => {
        console.log(horarios);
    }, [horarios]);

    const handleAddMoreHour = () => {
        setHorarios([...horarios, { from: 0, to: 0 }]);
    };

    const handleFrom = (e: any, index: number) => {
        // const changeHour = [...horarios];
        // changeHour[index].from = e.target.value;
        console.log(e);
    };

    const handleTo = (e: any, index: number) => {
        const changeHour = [...horarios];
        changeHour[index].to = e.target.value;
    };

    const handleRemoveHour = (index: number) => {
        if (index === 0) return false;

        const newArr = [...horarios];

        console.log(`Deleting index ${index} at ${newArr[index]}`);

        newArr.splice(index, 1);

        setHorarios(newArr);
    };

    return (
        <HorariosFormWrapper>
            <div className="hor__out">
                {horarios.map((hor, index) => (
                    <HorForm key={index}>
                        <HorFormWrapper>
                            <FormLabel>A partir dê</FormLabel>
                            <TimePicker
                                showSecond={false}
                                placeholder="ex: 08:00"
                                minuteStep={15}
                                focusOnOpen={true}
                                name={`from-${index}`}
                                onChange={(e) => handleFrom(e, index)}
                            />
                        </HorFormWrapper>
                        <HorFormWrapper>
                            <FormLabel>Até</FormLabel>
                            <TimePicker
                                showSecond={false}
                                placeholder="ex: 12:00"
                                minuteStep={15}
                                name={`to-${index}`}
                                focusOnOpen={true}
                                onChange={(e) => handleTo(e, index)}
                            />
                        </HorFormWrapper>
                        {index !== 0 && (
                            <HorDelete
                                onClick={() => handleRemoveHour(index)}
                                data-tip="Remover Horário"
                                data-for="delete"
                            >
                                <TiDeleteOutline size={24} />
                                <ReactTooltip effect="solid" id="delete" />
                            </HorDelete>
                        )}
                    </HorForm>
                ))}
                <HorAddMore
                    onClick={handleAddMoreHour}
                    data-tip="Adicionar Horário"
                    data-for="add"
                >
                    <BoxIcon hasCursor>
                        <AiOutlinePlus size={24} color="#fff" />
                    </BoxIcon>
                    <ReactTooltip effect="solid" id="add" />
                </HorAddMore>
            </div>
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
        </HorariosFormWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(HorariosForm as any);
