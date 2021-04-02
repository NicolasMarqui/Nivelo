import { useLazyEffect } from "@utils/useLazyEffect";
import { useRouter } from "next/router";
import { useState } from "react";
import ordenarValues from "@utils/JSON/ordenar.json";

interface FilterOrdenarProps {}

const FilterOrdenar: React.FC<FilterOrdenarProps> = ({}) => {
    const router = useRouter();
    const [ordenar, setOrdenar] = useState("");

    useLazyEffect(() => {
        router.push(
            {
                pathname: `/tutors`,
                query: { ...router.query, ordenar },
            },
            undefined,
            { shallow: true }
        );
    }, [ordenar]);

    return (
        <ul>
            {ordenarValues.map((opt, idx) => (
                <li
                    key={idx}
                    className="my-2 py-2 px-4 cursor-pointer bg-white rounded-xl transform hover:scale-105"
                    onClick={() => setOrdenar(opt.value)}
                >
                    <p className="font-bold text-base">{opt.label}</p>
                </li>
            ))}
        </ul>
    );
};

export default FilterOrdenar;
