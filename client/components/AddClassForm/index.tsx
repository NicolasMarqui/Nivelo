import { useState } from "react";
// prettier-ignore
import { Button, Flex, Form, FormError, FormGroup, FormInput, FormLabel, FormTextArea,} from "../../styles/helpers";
import { useFormik } from "formik";
import { AddClassFormWrapper } from "./AddClassForm.style";
import { Reoverlay } from "reoverlay";
import Select from "react-select";
import classLevels from "../../utils/classesLevels.json";
import LoadingAnimation from "../LoadingAnimation";
import { useNewClassMutation } from "../../generated/graphql";
import cookieCutter from "cookie-cutter";
import { toErrorMap } from "../../utils/toErrorMap";

interface AddClassFormProps {
    nextStep?: any;
    handleClassIDChange?: (i: number) => any;
}

// prettier-ignore
const AddClassForm: React.FC<AddClassFormProps> = ({ nextStep, handleClassIDChange,}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [ tutorId, setTutorId ] = useState(cookieCutter.get('tid'))
    const [, newClass] = useNewClassMutation();
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
            const { name, description, level  } = values;
            console.log(values)

            const response = await newClass({ tutorId: Number(tutorId), name, description, level})
            if (response.data.newClass.errors) {
                setErrors(toErrorMap(response.data.newClass.errors as any));
                setIsLoading(false)
            } else if(response.data.newClass.classes){
                handleClassIDChange(response.data.newClass.classes.id);
                window.setTimeout(nextStep, 2000);
            }


        },
    });

    return (
        <AddClassFormWrapper>
            {!isLoading ? (
                <Form onSubmit={formik.handleSubmit} width="100%">
                    <FormGroup>
                        <FormLabel>Nome</FormLabel>
                        <FormInput placeholder="Nome da aula" name="name" onChange={formik.handleChange}/>
                        {
                            formik.errors.name && <FormError>
                                {formik.errors.name}
                            </FormError>
                        }
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Descrição</FormLabel>
                        <FormTextArea
                            placeholder="Descrição da aula"
                            name="description"
                            onChange={formik.handleChange}
                        />
                        {
                            formik.errors.description && <FormError>
                                {formik.errors.description}
                            </FormError>
                        }
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Nível</FormLabel>
                        <Select
                            menuPlacement="top"
                            name="level"
                            closeMenuOnSelect={true}
                            placeholder="Nível da aula"
                            onChange={(e: any) => formik.setFieldValue('level', e.value)}
                            options={classLevels}
                        />
                    </FormGroup>
                    <Flex justifyCenter>
                        {/* prettier-ignore */}
                        <Button width="100px" margin="10px" bgColor="#57CC99" color="#fff" type="submit" bold fSize="18px">
                            Salvar
                        </Button>
                        {/* prettier-ignore */}
                        <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff" bold
                            fSize="18px">
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
