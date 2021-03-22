import { useState } from "react";
import { ClassesProps } from "@types";
import { MdSchool } from "react-icons/md";
import Side from "@components/UI/Side";
import IconButton from "@components/UI/IconButton";
import { MdEvent } from "react-icons/md";

interface ClassItemProps {
    singleClass: ClassesProps;
}

const ClassItem: React.FC<ClassItemProps> = ({ singleClass }) => {
    const [moreInfoClass, setMoreInfoClass] = useState(false);
    const { name, amountTimeTaught, description } = singleClass;

    return (
        <>
            <div
                className="w-full flex flex-row items-center justify-between bg-gray-100 rounded-2xl p-4 my-2 cursor-pointer transform hover:scale-105"
                onClick={() => setMoreInfoClass(true)}
            >
                <div className="flex-none">
                    <MdSchool size={22} />
                </div>
                <div className="flex-1 mx-6">
                    <h5 className="text-lg text-black222">{name}</h5>
                    <p className="text-sm text-gray-400">
                        {amountTimeTaught} aulas dadas
                    </p>
                </div>
                <div className="flex-none justify-self-end">
                    <div className="bg-primaryPink p-2 rounded-2xl">
                        <p className="text-base md:text-lg text-white font-bold">
                            R$ 8.00
                        </p>
                    </div>
                </div>
            </div>

            <Side
                isOpen={moreInfoClass}
                handleClose={() => setMoreInfoClass(!moreInfoClass)}
                header={{ title: name }}
            >
                <h3 className="text-xl font-bold">{name}</h3>
                <p>{description}</p>

                <div className="my-5 border-2 border-gray-200"></div>

                <IconButton
                    text="Agendar"
                    icon={<MdEvent size={18} color="#222" />}
                    classes="bg-primaryPink hover:bg-lightOrange text-white"
                />
            </Side>
        </>
    );
};
export default ClassItem;
