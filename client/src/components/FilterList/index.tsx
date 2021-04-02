import { useState, useEffect } from "react";
import categories from "@utils/JSON/categories.json";
import { useRouter } from "next/router";
import InputRange from "react-input-range";
import IconButton from "@components/UI/IconButton";

interface FilterListProps {}

const FilterList: React.FC<FilterListProps> = ({}) => {
    const router = useRouter();
    const [selectedCategoria, setSelectedCategoria] = useState(
        router.query.categoria ? router.query.categoria : ""
    );
    const [rangeValues, setRangeValues] = useState({ min: 0, max: 500 });

    const handleAplicar = () => {
        const customQuery = {
            ...router.query,
            minPreco: rangeValues.min,
            maxPreco: rangeValues.max,
        };

        if (selectedCategoria !== "") {
            Object.assign(customQuery, { categoria: selectedCategoria });
        }

        console.log(customQuery);

        router.push(
            {
                pathname: `/tutors`,
                query: {
                    ...customQuery,
                },
            },
            undefined,
            { shallow: true }
        );
    };

    useEffect(() => {
        if (Object.keys(router.query).length === 0) {
            setRangeValues({ min: 0, max: 500 });
            setSelectedCategoria("");
        }
    }, [router]);

    return (
        <div className="relative">
            <div className="my-2">
                <h4 className="text-sm text-gray-400">Categorias</h4>
                <div className="flex flex-col my-2 mb-5">
                    {categories.map((cat, idx) => (
                        <label
                            className="inline-flex items-center mt-3"
                            key={idx}
                        >
                            <input
                                type="radio"
                                className="form-radio h-5 w-5 text-gray-600"
                                name="categories"
                                checked={selectedCategoria === cat.value}
                                value={selectedCategoria}
                                onChange={(e) =>
                                    setSelectedCategoria(cat.value)
                                }
                            />
                            <span className="ml-2 text-gray-700">
                                {cat.value}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="my-2 mt-4">
                <h4 className="text-sm text-gray-400">Preço</h4>
                <div className="mt-10 px-3">
                    <InputRange
                        draggableTrack
                        formatLabel={(value) => `R$${value}`}
                        maxValue={500}
                        minValue={0}
                        value={rangeValues}
                        // @ts-ignore
                        onChange={(value) => setRangeValues(value)}
                    />
                </div>
            </div>
            <div className="mt-14 ">
                <IconButton
                    text="APLICAR"
                    classes="bg-primaryGreen hover:bg-lightGreen font-bold text-lg text-white"
                    onClick={handleAplicar}
                />
            </div>
        </div>
    );
};
export default FilterList;
