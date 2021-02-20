import { Description } from "../../../styles/helpers";
import IconButton from "../../IconButton";
import Filter from "../../Filter";
import { TtFilters } from "../../../pages/tutors/Tutors.styles";
import { MdFilterList, MdList, MdViewWeek } from "react-icons/md";

interface FilterContainerProps {
    data: any;
    isColumn: boolean;
    changeViewMode: any;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
    data,
    isColumn,
    changeViewMode,
}: FilterContainerProps) => {
    return (
        <TtFilters>
            <div className="filters__amount">
                <Description>
                    Mostrando
                    <span>{data ? data.allTutors.length : "-"}</span>
                    tutores
                </Description>
            </div>
            <div className="filters__buttons">
                <IconButton
                    icon={
                        isColumn ? (
                            <MdList size={17} />
                        ) : (
                            <MdViewWeek size={17} />
                        )
                    }
                    onClick={() => changeViewMode(!isColumn)}
                />
                <IconButton
                    text="Ordenar por"
                    icon={<MdFilterList size={17} />}
                    hasChevron={true}
                    onClick={() => alert("Hello")}
                />

                <Filter />
            </div>
        </TtFilters>
    );
};
export default FilterContainer;
