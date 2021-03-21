import { CategoriesItemWrapper } from "./CategoriesItem.style";
import Link from "next/link";

interface CategoriesItemProps {
    cat: {
        id: number;
        name: string;
        icon: string;
    };
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ cat }) => {
    return (
        <Link href={`/tutors?categoria=${cat.name}`}>
            <CategoriesItemWrapper>
                <img src={cat.icon} alt={cat.name} />
                <h3>{cat.name}</h3>
            </CategoriesItemWrapper>
        </Link>
    );
};
export default CategoriesItem;
