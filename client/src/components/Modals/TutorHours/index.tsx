import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { createUrqlClient } from "@utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useGetTutorsHourQuery } from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";

interface TutorHoursProps {
    tutorId: number;
    day: any;
}

const TutorHours: React.FC<TutorHoursProps> = ({ tutorId, day }) => {
    const [{ data, fetching, error }] = useGetTutorsHourQuery({
        variables: { tutorID: tutorId, date: day },
    });

    if (error) {
        return <EmptyAnimation />;
    }

    return (
        <ModalContainer>
            <h2 className="text-3xl font-bold text-center md:text-left">
                Horários disponiveis no dia
                <span className="block text-primaryOrange text-center">
                    {day}
                </span>
            </h2>

            <div className="mt-4 w-full">
                {fetching ? (
                    <LoadingAnimation />
                ) : !data || data.getTutorsHour.length === 0 ? (
                    <EmptyAnimation />
                ) : (
                    data.getTutorsHour.map((h) => (
                        <div className="relative w-full" key={h.id}>
                            <div className="flex flex-row items-center justify-between w-full my-2">
                                <div className="w-full md:flex-2 bg-gray-100 rounded-xl shadow-sm px-6 py-2 mr-2 md:mr-0">
                                    <p className="text-sm dark:text-black222">
                                        A partir de:{" "}
                                    </p>
                                    <h3 className="text-lg font-bold dark:text-black222">
                                        {h.from}
                                    </h3>
                                </div>
                                <div className="w-full md:flex-2 md:mx-2 bg-gray-100 rounded-xl shadow-sm px-6 py-2">
                                    <p className="text-sm dark:text-black222">
                                        Até:{" "}
                                    </p>
                                    <h3 className="text-lg font-bold dark:text-black222">
                                        {h.to}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <button
                className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-red-200"
                onClick={() => Reoverlay.hideModal()}
            >
                Fechar
            </button>
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(TutorHours as any);
