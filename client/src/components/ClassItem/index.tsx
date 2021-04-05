import { useState } from "react";
import { ClassesProps } from "@types";
import { MdSchool } from "react-icons/md";
import Side from "@components/UI/Side";
import IconButton from "@components/UI/IconButton";
import { MdEvent } from "react-icons/md";
import { useRouter } from "next/router";
import { lowestPriceClasses } from "@utils/lowestPriceClasses";

interface ClassItemProps {
    singleClass: ClassesProps;
    extraClasses?: string;
    hasClick?: boolean;
    tutorId: number;
}

const ClassItem: React.FC<ClassItemProps> = ({
    singleClass,
    extraClasses,
    hasClick = true,
    tutorId,
}) => {
    const router = useRouter();
    const [moreInfoClass, setMoreInfoClass] = useState(false);
    const { name, amountTimeTaught, description, price } = singleClass;

    const handleClick = () => {
        if (hasClick) {
            setMoreInfoClass(true);
        } else {
            router.push(`/tutor/${tutorId}#classes`);
        }
    };

    const handlePush = () => {
        router.push({ pathname: router.asPath, query: { agendar: true } });
    };

    return (
        <>
            <div
                className={`w-full flex flex-row items-center justify-between rounded-2xl cursor-pointer transform hover:scale-105 ${extraClasses}`}
                onClick={handleClick}
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
                        {price && (
                            <p className="text-base md:text-lg text-white font-bold">
                                R$ {lowestPriceClasses(price)}.00
                                <span>{price.length > 1 ? "+" : ""}</span>
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {moreInfoClass && (
                <Side
                    isOpen={moreInfoClass}
                    position="left"
                    handleClose={() => setMoreInfoClass(!moreInfoClass)}
                    header={{ title: name }}
                >
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p>
                        {description
                            ? description
                            : "Essa aula não possui descrição!"}
                    </p>

                    <div className="my-5 border-2 border-gray-200"></div>

                    <IconButton
                        text="Agendar"
                        icon={<MdEvent size={18} color="#222" />}
                        classes="bg-primaryPink hover:bg-lightOrange text-white"
                        onClick={handlePush}
                    />
                </Side>
            )}
        </>
    );
};
export default ClassItem;
