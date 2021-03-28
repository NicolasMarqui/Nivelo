import { useState } from "react";
import ModalContainer from "../ModalContainer";
import * as dateFns from "date-fns";
import horarios from "@utils/JSON/fromTo.json";
import Select from "react-select";
import { Reoverlay } from "reoverlay";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import { BsPlusCircleFill } from "react-icons/bs";
import Tooltip from "react-tooltip";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

interface AvailableDayHoursProps {
    day: any;
    isCurrentAvailable: any;
}

const AvailableDayHours: React.FC<AvailableDayHoursProps> = ({
    day,
    isCurrentAvailable,
}) => {
    const [fields, setFields] = useState([{ from: "0", to: "0" }]);

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const handleTo = (e: any, index: number) => {
        const changeHour = [...fields];

        if (
            changeHour[index].to < changeHour[index].from &&
            changeHour[index].from !== "00:00"
        ) {
            toast.error("Você é viajante do tempo?????????????");
        }

        changeHour[index].to = e.value;
    };

    const handleFrom = (e: any, index: number) => {
        const changeHour = [...fields];
        changeHour[index].from = e.value;
    };

    const handleAddMoreHour = () => {
        setFields([...fields, { from: 0, to: 0 }]);
    };

    const handleRemoveHour = (index: number) => {
        if (index === 0) return false;

        const newArr = [...fields];

        newArr.splice(index, 1);

        setFields(newArr);
    };

    const handleSave = () => {
        console.log(fields);
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">
                Dia -{" "}
                <span className="text-primaryOrange">
                    {dateFns.format(day, "dd/MM/yyyy")}
                </span>
            </h2>

            <p className="text-center md:text-left">
                Escolha os horários que você possui disponíveis nesse dia!
            </p>

            <div className="mt-2 w-full">
                {fields.map((f, index) => (
                    <div
                        className="flex flex-col md:flex-row items-center justify-between w-full my-2"
                        key={index}
                    >
                        <div className="w-full md:flex-2">
                            <p className="text-sm text-desc">A partir de: </p>
                            <Select
                                options={horarios}
                                placeholder="10:00"
                                instanceId={`hour${index}`}
                                menuPlacement="top"
                                onChange={(e) => handleFrom(e, index)}
                            />
                        </div>
                        <div className={`w-full md:flex-2 md:mx-2 `}>
                            <p className="text-sm text-desc">Até: </p>
                            <Select
                                options={horarios}
                                placeholder="10:00"
                                instanceId={`hour${index}`}
                                menuPlacement="top"
                                onChange={(e) => handleTo(e, index)}
                            />
                        </div>
                        <div className="flex-1 flex items-center text-center justify-center mt-2 cursor-pointer transform hover:scale-105">
                            <div
                                className="md:flex-1"
                                onClick={handleAddMoreHour}
                                data-tip="Adicionar Horário"
                                data-for="addH"
                            >
                                <BsPlusCircleFill size={30} />
                                <Tooltip id="addH" />
                            </div>
                            {index > 0 && (
                                <div
                                    className="w-full flex-1"
                                    onClick={() => handleRemoveHour(index)}
                                    data-tip="Remover Horário"
                                    data-for="deleteH"
                                >
                                    <TiDeleteOutline size={32} />
                                    <Tooltip id="deleteH" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center mb-5">
                <button
                    className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                    onClick={handleSave}
                >
                    Salvar
                </button>
                <button
                    className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-lightOrange ml-2"
                    onClick={handleClose}
                >
                    Cancelar
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-2 text-center bg-red-600 text-white cursor-pointer">
                Remover Disponibilidade
            </div>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(AvailableDayHours as any);
