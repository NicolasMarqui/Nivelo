import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import horarios from "@utils/JSON/fromTo.json";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { Reoverlay } from "reoverlay";
import { useNewHourToTutorMutation } from "../../../generated/graphql";
import ModalContainer from "../ModalContainer";

interface AvailableDayHoursProps {
    day: any;
    isCurrentAvailable: any;
    tutorId: number;
}

const AvailableDayHours: React.FC<AvailableDayHoursProps> = ({
    day,
    tutorId,
}) => {
    const router = useRouter();
    const [{ fetching }, newHour] = useNewHourToTutorMutation();
    const [fields, setFields] = useState({ from: "", to: "" });

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const handleTo = (e: any) => {
        setFields({ from: fields.from, to: e.value });
    };

    const handleFrom = (e: any) => {
        setFields({ from: e.value, to: fields.to });
    };

    const handleSave = async () => {
        const { from, to } = fields;

        if (from === "" || to === "") {
            toast.error(
                "Por favor, verifique se os horários foram preenchidos corretamente!"
            );
            return false;
        }

        if (to < from) {
            toast.error("You viajante no tempo man??");
            return false;
        }

        const save = await newHour({
            tutorID: tutorId,
            date: day,
            from: from,
            to: to,
        });

        if (save.data.newHourToTutor.errors) {
            toast.error("Algo deu errado... Tente Novamente");
        } else if (save.data.newHourToTutor.hour) {
            toast.success("Horário(s) adicionado(s) com sucesso!");
            Reoverlay.hideModal();
        }
    };

    return (
        <ModalContainer>
            <h2 className="text-2xl text-center md:text-3xl font-semibold dark:text-black222">
                Horarios no dia{" "}
                <span className="block text-primaryOrange">{day}</span>
            </h2>

            <p className="my-4 dark:text-black222">
                Adicione os horários que você tem disponível nesse dia!
            </p>

            {fetching ? (
                <LoadingAnimation />
            ) : (
                <>
                    <div className="mt-4 w-full">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full my-2">
                            <div className="w-full md:flex-2">
                                <p className="text-sm text-desc">
                                    A partir de:{" "}
                                </p>
                                <Select
                                    options={horarios}
                                    placeholder="10:00"
                                    menuPlacement="bottom"
                                    menuIsOpen
                                    className="dark:text-black222"
                                    onChange={(e) => handleFrom(e)}
                                />
                            </div>
                            <div className={`w-full md:flex-2 md:mx-2 `}>
                                <p className="text-sm text-desc">Até: </p>
                                <Select
                                    options={horarios}
                                    placeholder="10:00"
                                    menuPlacement="bottom"
                                    menuIsOpen
                                    className="dark:text-black222"
                                    onChange={(e) => handleTo(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-96"></div>
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
                    </div>{" "}
                </>
            )}
        </ModalContainer>
    );
};

export default withUrqlClient(createUrqlClient)(AvailableDayHours as any);
