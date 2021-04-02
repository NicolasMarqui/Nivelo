import FilterList from "@components/FilterList";
import FilterOrdenar from "@components/FilterOrdernar";
import Dropdown from "@components/UI/Dropdown";
import IconButton from "@components/UI/IconButton";
import Side from "@components/UI/Side";
import useWindowSize from "@hooks/useWindowSize";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { VscListOrdered } from "react-icons/vsc";

interface FilterContainerProps {
    amount: number | string;
}

const FilterContainer: React.FC<FilterContainerProps> = ({ amount }) => {
    const router = useRouter();
    const { width } = useWindowSize();

    // Filter open values
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenOrder, setIsOpenOrder] = useState(false);

    const handleFilterClean = () => {
        router.query = {};
        router.push(
            {
                pathname: `/tutors`,
            },
            undefined,
            { shallow: true }
        );
    };

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
                    <div className="mx-4 relative">
                        <IconButton
                            icon={<VscListOrdered size={20} />}
                            text="Ordenar por"
                            onClick={() => setIsOpenOrder(!isOpenOrder)}
                        />
                        <Dropdown
                            isOpen={isOpenOrder}
                            handleChange={() => setIsOpenOrder(!isOpenOrder)}
                            classes="top-full shadow-xl bg-gray-100 w-auto"
                        >
                            <FilterOrdenar />
                        </Dropdown>
                    </div>
                    <IconButton
                        icon={<FiFilter size={20} />}
                        text="Filtros"
                        onClick={() => setIsOpenFilter(true)}
                    />
                    {(router.query.localizacao ||
                        router.query.minPreco ||
                        router.query.maxPreco ||
                        router.query.categoria ||
                        router.query.ordenar ||
                        router.query.tutor) &&
                        Object.keys(router.query).length > 0 && (
                            <div className="filter__clear ml-2">
                                <IconButton
                                    classes="bg-red-600 text-white hover:bg-red-200"
                                    text={`${
                                        width > 1024
                                            ? `Limpar filtros (${
                                                  Object.keys(router.query)
                                                      .length
                                              })`
                                            : ""
                                    }`}
                                    icon={<MdClose size={17} color="#222" />}
                                    onClick={handleFilterClean}
                                />
                            </div>
                        )}
                </div>
            </div>

            <Side
                isOpen={isOpenFilter}
                handleClose={() => setIsOpenFilter(false)}
                header={{ title: "Filtros" }}
            >
                <FilterList />
            </Side>
        </>
    );
};
export default FilterContainer;
