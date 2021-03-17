import ReactTooltip from "react-tooltip";
import { TutorCategoriesListWrapper } from "./TutorCategoriesList.style";

interface TutorCategoriesListProps {
    categories: {
        id: number;
        name: string;
        icon: string;
    };
}

const TutorCategoriesList: React.FC<TutorCategoriesListProps> = ({
    categories,
}) => {
    return (
        <TutorCategoriesListWrapper
            data-tip={categories.name}
            data-for={categories.id}
        >
            <div className="cat__list">
                <img src={categories.icon} alt={categories.name} />
            </div>
            <ReactTooltip effect="solid" id={categories.id.toString()} />
        </TutorCategoriesListWrapper>
    );
};
export default TutorCategoriesList;
