import Select from "react-select";
import { useAllTypesQuery } from "../../../generated/graphql";
// prettier-ignore
import { Button, Description, FormGroup, FormInput, FormLabel, FormTextArea} from "../../../styles/helpers";
import { BecomeFormArea } from "./BecomeForm.style";
import { useFormik } from "formik";

interface BecomeFormProps {}

const BecomeForm: React.FC<BecomeFormProps> = ({}) => {
    const [{ data, fetching }] = useAllTypesQuery();

    const formik = useFormik({
        initialValues: {
            tipoTutor: "",
        },
        onSubmit: async (values, { setErrors }) => {
            console.log(values);
        },
    });

    return (
        <BecomeFormArea onSubmit={formik.handleSubmit}>
            <FormGroup>
                <FormLabel>Tipo de Tutor</FormLabel>
                <Description fontSize="14px" marginTop={5} color="#a0a0a0">
                    Escolha o tipo de tutor que vc deseja ser...
                </Description>
                <Select
                    className="select__margin"
                    closeMenuOnSelect={true}
                    placeholder="Tipo de Tutor"
                    value={{
                        label: formik.values.tipoTutor,
                        value: formik.values.tipoTutor,
                    }}
                    onChange={(e) => {
                        formik.setFieldValue("tipoTutor", e.label);
                    }}
                    options={
                        data &&
                        data.allTypes.map((dt) => {
                            return {
                                label: dt.name,
                                value: dt.name.toLowerCase(),
                            };
                        })
                    }
                    isLoading={fetching}
                />
            </FormGroup>
            <FormGroup>
                <Button
                    bgColor="#57CC99"
                    color="#fff"
                    fSize="20px"
                    type="submit"
                >
                    Salvar
                </Button>
            </FormGroup>
        </BecomeFormArea>
    );
};
export default BecomeForm;
