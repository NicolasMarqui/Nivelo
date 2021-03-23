import { useState } from "react";
import IconButton from "@components/UI/IconButton";
import { MdList } from "react-icons/md";
import { VscListOrdered } from "react-icons/vsc";
import { FiFilter } from "react-icons/fi";
import Side from "@components/UI/Side";

interface FilterContainerProps {
    amount: number | string;
}

const FilterContainer: React.FC<FilterContainerProps> = ({ amount }) => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    return (
        <>
            <div className="mt-2 flex flex-col md:flex-row items-center justify-between">
                <div className="my-2">
                    <p className="text-base text-black222">
                        Mostrando
                        <span className="text-lg font-bold text-primaryOrange mx-1">
                            {amount}
                        </span>
                        tutores
                    </p>
                </div>
                <div className="my-2 flex items-center justify-end">
                    <IconButton icon={<MdList size={20} />} />
                    <IconButton
                        icon={<VscListOrdered size={20} />}
                        text="Ordenar por"
                        classes="mx-2"
                    />
                    <IconButton
                        icon={<FiFilter size={20} />}
                        text="Filtros"
                        onClick={() => setIsOpenFilter(true)}
                    />
                </div>
            </div>

            {isOpenFilter && (
                <Side
                    isOpen={isOpenFilter}
                    handleClose={() => setIsOpenFilter(false)}
                    header={{ title: "Filtros" }}
                >
                    Hello Side
                </Side>
            )}
        </>
    );
};
export default FilterContainer;
