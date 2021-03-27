import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
// prettier-ignore
import { useAllCategoriesTutorQuery, useCategoriesQuery, useCategoryToTutorMutation, useRemoveCategoryFromTutorMutation,} from "src/generated/graphql";
import Tooltip from "react-tooltip";
import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import toast from "react-hot-toast";

interface Categories {
    __typename?: string;
    id?: number;
    name?: string;
    icon?: string;
}

interface TutorCategoriesListProps {
    tutorID: number;
    categories: number[] | [];
}

const TutorCategoriesList: React.FC<TutorCategoriesListProps> = ({
    tutorID,
    categories,
}) => {
    const [{ data, fetching, error }] = useCategoriesQuery();
    const [, removeCatFromTutor] = useRemoveCategoryFromTutorMutation();
    const [, categoryToTutor] = useCategoryToTutorMutation();

    const [hasCheck, setHasCheck] = useState(categories);
    console.log(categories);

    if (fetching || error) {
        return <LoadingAnimation />;
    }

    const checkCategories = (cat: Categories) => {
        if (categories && categories.length > 0) {
            return (
                <div>
                    {/* @ts-ignore */}
                    {hasCheck.includes(cat.id) ? (
                        <MdCheckCircle size={20} color="#57CC99" />
                    ) : (
                        <FaTimesCircle size={20} color="#fb475e" />
                    )}
                </div>
            );
        } else {
            return (
                <div>
                    <FaTimesCircle size={20} color="#fb475e" />
                </div>
            );
        }
    };

    const handleClick = async (cat: Categories) => {
        if (
            categories &&
            categories.length > 0 &&
            hasCheck.includes(cat.id as never)
        ) {
            const response = await removeCatFromTutor({
                tutorID,
                categoryID: cat.id,
            });

            if (response.data) {
                toast.success("Categoria removida!");
                setHasCheck(hasCheck.filter((c) => c !== cat.id));
            } else {
                toast.error("Algo deu errado!");
            }

            checkCategories(cat);
        } else {
            const response = await categoryToTutor({
                tutorID,
                categoryID: cat.id,
            });

            if (response.data.categoryToTutor) {
                toast.success("Categoria adicionada!");
                setHasCheck([...hasCheck, cat.id]);
            } else {
                toast.error("Algo deu errado!");
            }

            checkCategories(cat);
        }
    };

    return (
        <div className="mt-4 flex flex-wrap md:flex-nowrap  flex-row justify-center">
            {!data || data.allCategories.length === 0 ? (
                <EmptyAnimation />
            ) : (
                data.allCategories.map((cat) => (
                    <div
                        className="mx-3 shadow-md p-2 mt-3 md:my-0 flex justify-center items-center flex-col cursor-pointer transform hover:scale-105"
                        key={cat.id}
                        data-tip={cat.name}
                        data-for="t-cat"
                        onClick={() => handleClick(cat)}
                    >
                        <img
                            src={cat.icon}
                            alt={cat.name}
                            className="w-24 md:w-40 flex-2"
                        />
                        <h4 className="text-center text-base mt-1 font-semibold flex-1 flex items-center md:hidden">
                            {cat.name}
                        </h4>
                        <div className="mt-2">{checkCategories(cat)}</div>
                        <Tooltip effect="solid" place="bottom" id="t-cat" />
                    </div>
                ))
            )}
        </div>
    );
};
export default TutorCategoriesList;
