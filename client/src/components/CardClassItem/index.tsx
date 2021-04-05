import { ClassesProps } from "@types";
import { lowestPriceClasses } from "@utils/lowestPriceClasses";
import { useRouter } from "next/router";
import { MdSchool } from "react-icons/md";
import Tooltip from "react-tooltip";

interface CardClassItemProps {
    singleClass: ClassesProps;
    tutorId: number;
    extraClasses?: string;
}

const CardClassItem: React.FC<CardClassItemProps> = ({
    singleClass,
    tutorId,
    extraClasses,
}) => {
    const router = useRouter();
    const { name, amountTimeTaught, description, price } = singleClass;

    return (
        <div
            className={`w-full flex flex-row items-center justify-between rounded-2xl cursor-pointer transform hover:scale-105 ${extraClasses}`}
            onClick={() => router.push(`/tutor/${tutorId}#classes`)}
            data-for="priceCard"
            data-tip={
                price.length > 1
                    ? `Aulas a partir de R$ ${lowestPriceClasses(price)}`
                    : `Aula com valor de R$ ${lowestPriceClasses(price)}`
            }
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
                        R$ {lowestPriceClasses(price)}
                        <span>{price.length > 1 ? "+" : ""}</span>
                    </p>
                </div>
            </div>
            <Tooltip effect="solid" place="bottom" id="priceCard" />
        </div>
    );
};
export default CardClassItem;
