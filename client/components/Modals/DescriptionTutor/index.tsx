import { withUrqlClient } from "next-urql";
import { useState } from "react";
import { ModalWrapper, Reoverlay } from "reoverlay";
import "../../../node_modules/reoverlay/lib/ModalWrapper.css";
// prettier-ignore
import { Button, Description, Flex, Form, FormGroup, FormLabel, FormTextArea, FormError } from "../../../styles/helpers";
import { createUrqlClient } from "../../../utils/createUrqlClient";
import LoadingAnimation from "../../LoadingAnimation";
import { TutorTitle } from "../../TutorCard/TutorCard.style";
// prettier-ignore
import { ModalContainer } from "../Modals.style";
import { useFormik } from "formik";
import { useUpdateTutorMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import toast from "react-hot-toast";

interface DescriptionTutorProps {
    tutorID: number;
    tutorDescription: string;
}

const DescriptionTutor: React.FC<DescriptionTutorProps> = ({
    tutorID,
    tutorDescription,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [, updateUser] = useUpdateTutorMutation();

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            description: tutorDescription ? tutorDescription : "",
        },
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);

            const response = await updateUser({
                id: tutorID,
                description: values.description,
            });

            if (response.data.updateTutor.errors) {
                setErrors(toErrorMap(response.data.updateTutor.errors));
            } else if (response.data.updateTutor.tutor) {
                Reoverlay.hideModal();
                toast.success("Descrição salva!");
            }
        },
    });

    return (
        <ModalWrapper>
            <ModalContainer>
                <TutorTitle>Descrição</TutorTitle>
                <Description>
                    A descrição é importante para os alunos conhecerem um pouco
                    mais de você como tutor, o que você ensina e os resultados
                    esperados!
                </Description>
                {!isLoading ? (
                    <>
                        <Form onSubmit={formik.handleSubmit} width="100%">
                            <FormGroup>
                                <FormLabel>Descrição</FormLabel>
                                <FormTextArea
                                    placeholder="Descrição como tutor"
                                    name="description"
                                    onChange={formik.handleChange}
                                    value={formik.values.description}
                                />
                                {formik.errors.description && (
                                    <FormError>
                                        {formik.errors.description}
                                    </FormError>
                                )}
                            </FormGroup>
                            {/* prettier-ignore */}
                            <Flex justifyCenter>
                                <Button type="submit" width="100px" margin="10px" bgColor="#57CC99" color="#fff" notActive={isLoading}>
                                    Salvar
                                </Button>
                                {/* prettier-ignore */}
                                <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                                    Cancelar
                                </Button>
                            </Flex>
                        </Form>
                    </>
                ) : (
                    <LoadingAnimation />
                )}
            </ModalContainer>
        </ModalWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(DescriptionTutor as any);
