import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Reoverlay } from "reoverlay";
import { useNewPriceMutation } from "../../generated/graphql";
// prettier-ignore
import { Button, Description, Flex, Form, FormGroup, FormInput, FormLabel } from "../../styles/helpers";
import { toErrorMap } from "../../utils/toErrorMap";
import LoadingAnimation from "../LoadingAnimation";
import { AddPriceFormWrapper } from "./AddPriceForm.style";

interface AddPriceFormProps {
    classID?: number;
}

const AddPriceForm: React.FC<AddPriceFormProps> = ({ classID }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [, newPrice] = useNewPriceMutation();

    const closeModal = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            time: 0,
            price: 0,
        },
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);

            const { time, price } = values;

            const response = await newPrice({ classID, time, price });
            if (response.data.newPrice.errors) {
                setErrors(toErrorMap(response.data.newPrice.errors as any));
            } else if (response.data.newPrice.price) {
                formik.setFieldValue("time", 0);
                formik.setFieldValue("price", 0);

                toast.success("Horário adicionado com sucesso");
                setIsLoading(false);
            }
        },
    });

    return (
        <AddPriceFormWrapper>
            {!isLoading ? (
                <Form onSubmit={formik.handleSubmit} width="100%">
                    <FormGroup>
                        <Description fontSize="14px" color="#8390FA">
                            Aqui você determina qual a duração da aula, exemplo:
                            30min, 60min ou 120min
                        </Description>
                        <FormLabel>
                            Tempo de duração da aula - em minutos
                        </FormLabel>
                        <FormInput
                            placeholder="Tempo de duração da aula"
                            name="time"
                            type="number"
                            onChange={formik.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Description fontSize="14px" color="#8390FA">
                            Aqui você determina o preço por hora
                        </Description>
                        <FormLabel>Preço /hr</FormLabel>
                        <FormInput
                            placeholder="Preço da aula"
                            name="price"
                            type="number"
                            onChange={formik.handleChange}
                        />
                    </FormGroup>
                    <Flex justifyCenter>
                        <Button
                            width="100px"
                            margin="10px"
                            bgColor="#57CC99"
                            color="#fff"
                            type="submit"
                            bold
                            fSize="18px"
                        >
                            Salvar
                        </Button>
                        <Button
                            onClick={closeModal}
                            bold
                            fSize="18px"
                            width="100px"
                            margin="10px"
                            bgColor="#fb475e"
                            color="#fff"
                        >
                            Sair
                        </Button>
                    </Flex>
                </Form>
            ) : (
                <LoadingAnimation />
            )}
        </AddPriceFormWrapper>
    );
};
export default AddPriceForm;
