import DeleteClass from "@components/Modals/DeleteClass";
import EditClass from "@components/Modals/EditClass";
import VisibilityClass from "@components/Modals/VisibilityClass";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import { ClassesProps } from "@types";
import { Reoverlay } from "reoverlay";

interface TutorClassListProps {
    classes: ClassesProps[] | [] | null;
}

const TutorClassList: React.FC<TutorClassListProps> = ({ classes }) => {
    return (
        <div className="relative">
            <div className="flex flex-col">
                {!classes || classes.length === 0 ? (
                    <EmptyAnimation />
                ) : (
                    classes.map((cl: ClassesProps) => (
                        <div
                            className={`
                            flex flex-col md:flex-row bg-white rounded-3xl my-3 py-4 px-6 items-center justify-center md:justify-between transform
                            ${!cl.active ? " opacity-60" : " "}
                        `}
                            key={cl.id}
                        >
                            <div className="flex-2">
                                <h2 className="text-center md:text-left text-xl font-semibold">
                                    {cl.name}
                                </h2>
                                <h3 className="text-center md:text-left text-base">
                                    Nível:{" "}
                                    <span className="text-primaryOrange">
                                        {cl.level}
                                    </span>
                                </h3>
                                <p className="text-center md:text-left text-desc text-sm md:text-base">
                                    Ensinada {cl.amountTimeTaught} vezes
                                </p>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                                <button
                                    className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                                    onClick={() =>
                                        Reoverlay.showModal(EditClass, {
                                            singleClass: cl,
                                        })
                                    }
                                >
                                    Editar
                                </button>
                                <button
                                    className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-lightOrange mx-2"
                                    onClick={() =>
                                        Reoverlay.showModal(DeleteClass, {
                                            classID: cl.id,
                                        })
                                    }
                                >
                                    Deletar
                                </button>
                                <button
                                    className="w-full p-3 mt-4 bg-primaryOrange text-white rounded shadow hover:bg-lightOrange"
                                    onClick={() =>
                                        Reoverlay.showModal(VisibilityClass, {
                                            classID: cl.id,
                                            active: cl.active,
                                        })
                                    }
                                >
                                    {cl.active ? "Desativar" : "Ativar"}
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
export default TutorClassList;
