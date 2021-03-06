import { useFormik } from "formik";
import { withUrqlClient } from "next-urql";
import { useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import { Reoverlay } from "reoverlay";
import { useUpdateClassMutation } from "../../generated/graphql";
// prettier-ignore
import { Button, Flex, Form, FormError, FormGroup, FormInput, FormLabel, FormTextArea } from "../../styles/helpers";
import classLevels from "../../utils/classesLevels.json";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import ChangePriceList from "../ChangePriceList";
import { EditClassProps } from "../Modals/EditClass";
import { EditClassWrapper } from "../Modals/EditClass/EditClass.style";

const EditClassForm: React.FC<EditClassProps> = ({ singleClass }) => {
    const [, updateClass] = useUpdateClassMutation();
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            name: singleClass.name,
            description: singleClass.description || "",
            level: singleClass.level,
        },
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);
            const { name, description, level } = values;

            const response = await updateClass({
                id: singleClass.id,
                name,
                description,
                level,
            });
            if (response.data.updateClass.errors) {
                setErrors(toErrorMap(response.data.updateClass.errors as any));
                setIsLoading(false);
            } else if (response.data.updateClass.classes) {
                toast.success("Detalhes da aula atualizados!");
                Reoverlay.hideModal();
            }
        },
    });

    return (
        <EditClassWrapper>
            <Form onSubmit={formik.handleSubmit} width="100%">
                <FormGroup>
                    <FormLabel>Nome</FormLabel>
                    <FormInput
                        placeholder="Nome da aula"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        type="text"
                    />
                    {formik.errors.name && (
                        <FormError>{formik.errors.name}</FormError>
                    )}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Descrição</FormLabel>
                    <FormTextArea
                        placeholder="Descrição da aula"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                    />
                    {formik.errors.description && (
                        <FormError>{formik.errors.description}</FormError>
                    )}
                </FormGroup>
                <FormGroup>
                    <FormLabel>Nível</FormLabel>
                    <Select
                        menuPlacement="top"
                        name="level"
                        closeMenuOnSelect={true}
                        placeholder={singleClass.level || "Nível da aula"}
                        onChange={(e: any) =>
                            formik.setFieldValue("level", e.value)
                        }
                        options={classLevels}
                    />
                    {formik.errors.level && (
                        <FormError>{formik.errors.level}</FormError>
                    )}
                </FormGroup>
                {singleClass.price && singleClass.price.length > 0 && (
                    <FormGroup>
                        <FormLabel>Horários</FormLabel>
                        <ChangePriceList price={singleClass.price} />
                    </FormGroup>
                )}
                <Flex justifyCenter>
                    {/* prettier-ignore */}
                    <Button width="100px" margin="10px" bgColor="#57CC99" color="#fff" type="submit" bold fSize="18px" notActive={isLoading}>
                            Salvar
                        </Button>
                    {/* prettier-ignore */}
                    <Button onClick={closeModal} width="100px" margin="10px" bgColor="#fb475e" color="#fff" bold
                            fSize="18px">
                        Cancelar
                    </Button>
                </Flex>
            </Form>
        </EditClassWrapper>
    );
};
export default withUrqlClient(createUrqlClient)(EditClassForm as any);
