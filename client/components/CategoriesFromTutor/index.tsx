import { useAllCategoriesTutorQuery } from "../../generated/graphql";

interface CategoriesFromTutorProps {
    tutorId: number;
}

const CategoriesFromTutor: React.FC<CategoriesFromTutorProps> = ({
    tutorId,
}) => {
    const [{ data, fetching, error }] = useAllCategoriesTutorQuery({
        variables: { id: tutorId },
    });

    if (fetching || error) {
        return <p>-</p>;
    }

    return (
        <p>
            Ensina
            {data.allCategoriesTutor.map((cat, idx) => {
                return (
                    <span key={cat.id}>
                        {idx === data.allCategoriesTutor.length - 1
                            ? " e "
                            : idx === 0
                            ? "  "
                            : " , "}
                        {cat.name}
                    </span>
                );
            })}
        </p>
    );
};
export default CategoriesFromTutor;
