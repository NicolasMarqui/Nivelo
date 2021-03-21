// prettier-ignore
import { useRouter } from "next/router";
import useWindowSize from "../../../hooks/useWindowSize";
import {
    Container,
    Title,
    Section,
    PreTitle,
    Flex,
} from "../../../styles/helpers";
import { SeeAllTutorsWrapper } from "../../../styles/Home.styles";
import CategoriesItem from "../../CategoriesItem";
import IconButton from "../../IconButton";

interface CategoriesProps {
    data: any;
}

const Categories: React.FC<CategoriesProps> = ({ data }: CategoriesProps) => {
    const router = useRouter();
    const { width } = useWindowSize();

    return (
        <Section>
            <Container>
                <PreTitle>Categorias</PreTitle>
                <Title
                    fontSize="60px"
                    fontWeight="400"
                    size={width > 1024 ? 51 : 100}
                >
                    Categorias que combinam com você
                </Title>
                {width > 1024 && (
                    <SeeAllTutorsWrapper>
                        <IconButton
                            text="Todos os tutores"
                            bColor="#FF4338"
                            color="#fff"
                            onClick={() => router.push("/tutors")}
                        />
                    </SeeAllTutorsWrapper>
                )}
                {!data ? (
                    <p>Niente</p>
                ) : (
                    <Flex style={{ marginTop: "25px" }}>
                        {data.allCategories.map((cat) => (
                            <CategoriesItem cat={cat} key={cat.id} />
                        ))}
                    </Flex>
                )}
            </Container>
        </Section>
    );
};
export default Categories;
