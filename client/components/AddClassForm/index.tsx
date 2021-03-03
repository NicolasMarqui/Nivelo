import { useState } from "react";
// prettier-ignore
import { Button, Flex, Form, FormGroup, FormInput, FormLabel, FormTextArea,} from "../../styles/helpers";
import { useFormik } from "formik";
import { AddClassFormWrapper } from "./AddClassForm.style";
import { Reoverlay } from "reoverlay";
import Select from "react-select";
import classLevels from "../../utils/classesLevels.json";
import LoadingAnimation from "../LoadingAnimation";

const AddClassForm: React.FC = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            level: "",
        },
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);
            Reoverlay.hideModal();
        },
    });

    return (
        <AddClassFormWrapper>
            {!isLoading ? (
                <Form onSubmit={formik.handleSubmit} width="100%">
                    <FormGroup>
                        <FormLabel>Nome</FormLabel>
                        <FormInput placeholder="Nome da aula" name="name" />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Descrição</FormLabel>
                        <FormTextArea
                            placeholder="Descrição da aula"
                            name="description"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Nível</FormLabel>
                        <Select
                            menuPlacement="top"
                            name="level"
                            closeMenuOnSelect={true}
                            placeholder="Nível da aula"
                            // defaultValue={classLevels[3].label}
                            onChange={(e: any) => console.log(e)}
                            options={classLevels}
                        />
                    </FormGroup>
                    <Flex justifyCenter>
                        <Button
                            width="100px"
                            margin="10px"
                            bgColor="#57CC99"
                            color="#fff"
                            type="submit"
                        >
                            Salvar
                        </Button>
                        {/* prettier-ignore */}
                        <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff">
                        Cancelar
                    </Button>
                    </Flex>
                </Form>
            ) : (
                <LoadingAnimation />
            )}
        </AddClassFormWrapper>
    );
};
export default AddClassForm;
