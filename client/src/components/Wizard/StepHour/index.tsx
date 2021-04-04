import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useState } from "react";
import { useGetTutorsHourQuery } from "src/generated/graphql";

interface StepHourProps {
    nextStep?: any;
    tutorID: number;
    handleHour: (value: string) => any;
    selectedDate: string | Date | null;
}

const StepHour: React.FC<StepHourProps> = ({
    tutorID,
    handleHour,
    selectedDate,
    nextStep,
}) => {
    const [{ data, fetching, error }] = useGetTutorsHourQuery({
        variables: {
            tutorID,
            date: selectedDate.toString().replaceAll("/", "-"),
        },
    });
    const [selectedHour, setSelectedHour] = useState({});

    const handleSelected = (cl: any) => {
        setSelectedHour(cl);
        handleHour(cl);
        nextStep();
    };

    if (error) {
        return <EmptyAnimation />;
    }

    if (fetching) {
        return <LoadingAnimation />;
    }

    return (
        <div className="h-full overflow-x-hidden overflow-y-auto md:w-7/12 mx-auto mt-3">
            <p className="text-desc text-center my-2">
                Escolha o melhor horário que você prefira ter a aula escolhida
                com o tutor escolhido
            </p>
            {!data || data.getTutorsHour.length === 0 ? (
                <EmptyAnimation />
            ) : (
                data.getTutorsHour.map((h) => (
                    <div
                        key={h.id}
                        className={`flex items-center justify-between cursor-pointer shadow-md hover:bg-lightGreen rounded-2xl bg-gray-50 p-5 my-2 mt-2 ${
                            selectedHour === h ? "bg-primaryGreen" : ""
                        }`}
                        onClick={() => handleSelected(h)}
                    >
                        <div className="w-full md:flex-2 bg-white rounded-xl shadow-sm px-6 py-2 mr-2 md:mr-0">
                            <p className={`text-sm`}>A partir de: </p>
                            <h3 className={`text-lg font-bold`}>{h.from}</h3>
                        </div>
                        <div className="w-full md:flex-2 md:mx-2 bg-white rounded-xl shadow-sm px-6 py-2">
                            <p className={`text-sm`}>Até: </p>
                            <h3 className={`text-lg font-bold`}>{h.to}</h3>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};
export default StepHour;
