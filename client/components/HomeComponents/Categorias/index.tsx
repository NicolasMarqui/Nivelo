// prettier-ignore
import { Container, Title, Section, PreTitle} from "../../../styles/helpers";

interface CategoriesProps {
    data: any;
}

const Categories: React.FC<CategoriesProps> = ({ data }: CategoriesProps) => {
    return (
        <Section>
            <Container>
                <PreTitle>Categorias</PreTitle>
                <Title fontSize="60px" fontWeight="400" size={51}>
                    Categorias que combinam com você
                </Title>
                {!data ? (
                    <p>Niente</p>
                ) : (
                    data.allCategories.map((cat) => cat.name)
                )}
            </Container>
        </Section>
    );
};
export default Categories;
