import { useState, useEffect } from "react";
import { withUrqlClient } from "next-urql";
import toast from "react-hot-toast";
import { FaTimesCircle } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import ReactTooltip from "react-tooltip";
import { ModalWrapper, Reoverlay } from "reoverlay";
//prettier-ignore
import { useCategoriesQuery, useRemoveCategoryFromTutorMutation, useCategoryToTutorMutation,} from "../../../generated/graphql";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
import { Description, Flex, Button } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import LoadingAnimation from "../../LoadingAnimation";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
import { ModalContainer } from "../Modals.style";
//prettier-ignore
import { AddCategoriesTutorWrapper, CategoriesListWrapper,} from "./AddCategoriesTutor.style";

interface Categories {
    __typename?: string;
    id?: number;
    name?: string;
    icon?: string;
}

interface AddCategoriesTutorProps {
    tutorID: number;
    categories: number[] | [];
}

const AddCategoriesTutor: React.FC<AddCategoriesTutorProps> = ({
    tutorID,
    categories,
}) => {
    const [{ data, fetching, error }] = useCategoriesQuery();
    const [, removeCatFromTutor] = useRemoveCategoryFromTutorMutation();
    const [, categoryToTutor] = useCategoryToTutorMutation();

    const [hasCheck, setHasCheck] = useState(categories);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    if (error) {
        closeModal();
    }

    if (fetching) {
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
            categories.includes(cat.id as never)
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
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Categorias</TutorTitle>
                <Description size="100" txtAlign>
                    Selecione as categorias que mostram o tipo de aula que você
                    fornece!
                </Description>
                <AddCategoriesTutorWrapper
                    data-tip="Clique para marcar/desmarcar"
                    data-for="alterar"
                >
                    {data.allCategories.map((cat) => (
                        <CategoriesListWrapper
                            key={cat.id}
                            onClick={() => handleClick(cat)}
                        >
                            {checkCategories(cat)}
                            <img src={cat.icon} alt={cat.name} />
                            <h4>{cat.name}</h4>
                        </CategoriesListWrapper>
                    ))}
                    <ReactTooltip effect="solid" id="alterar" place="bottom" />
                </AddCategoriesTutorWrapper>
                <Flex justifyCenter>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                        Sair
                    </Button>
                </Flex>
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(AddCategoriesTutor as any);
