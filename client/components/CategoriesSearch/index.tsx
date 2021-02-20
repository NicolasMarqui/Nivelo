import { useCategoriesQuery } from "../../generated/graphql";
import { CategoriesSeachWrapper } from "./CategoriesSeach.style";
import Link from "next/link";

interface CategoriesSeachProps {
    isVisible: boolean;
    position?: "top" | "bottom";
    onClickOutside?: () => any;
}

export default function CategoriesSeach({
    isVisible,
    onClickOutside,
    position,
}: CategoriesSeachProps) {
    const [{ data, fetching }] = useCategoriesQuery();

    return (
        <CategoriesSeachWrapper isVisible={isVisible} position={position}>
            {fetching ? (
                <p>Cargando...</p>
            ) : !data ? (
                <p>Opsie daisy</p>
            ) : (
                <div className="cat__all">
                    <ul>
                        {data.allCategories.map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/tutors?categoria=${cat.name}`}
                                as={`/tutors?categoria=${cat.name}`}
                            >
                                <li>
                                    <p>{cat.name}</p>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </CategoriesSeachWrapper>
    );
}
