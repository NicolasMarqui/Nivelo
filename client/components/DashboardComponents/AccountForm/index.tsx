import { useState } from "react";
import { AccountFormWrapper } from "./AccountForm.style";
// prettier-ignore
import { FormFull, FormGroup, FormLabel, FormInput, FormTextArea, Button} from "../../../styles/helpers";
import Select from "react-select";
import countries from "../../../utils/countries.json";
import { useFormik } from "formik";
import { useMoreInfoUserMutation } from "../../../generated/graphql";
import { toErrorMap } from "../../../utils/toErrorMap";
import { useRouter } from "next/router";
interface AccountFormProps {
    user?: any;
}

const AccountForm: React.FC<AccountFormProps> = ({
    user,
}: AccountFormProps) => {
    const [, moreInfoUser] = useMoreInfoUserMutation();
    const router = useRouter();
    const [userCountry, setUserCountry] = useState(
        user.country || countries[31]
    );

    const formik = useFormik({
        initialValues: {
            name: user.name,
            description: user.description || "",
            country: userCountry,
        },
        onSubmit: async (values, { setErrors }) => {
            const response = await moreInfoUser({
                id: user.id,
                description: values.description,
                country: userCountry,
            });
            if (response.data.addMoreInfo.errors) {
                setErrors(toErrorMap(response.data.addMoreInfo.errors));
            } else if (response.data.addMoreInfo.user) {
                router.push("/dashboard");
            }
        },
    });

    return (
        <AccountFormWrapper>
            <FormFull onSubmit={formik.handleSubmit}>
                <FormGroup>
                    <FormLabel>Nome</FormLabel>
                    <FormInput
                        name="name"
                        placeholder="Seu nome"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Descrição</FormLabel>
                    <FormTextArea
                        name="description"
                        placeholder="Sua descrição"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>País</FormLabel>
                    <Select
                        name="country"
                        closeMenuOnSelect={true}
                        value={formik.values.country}
                        placeholder={userCountry}
                        onChange={(e) => setUserCountry(e.label)}
                        options={countries.map((c: any) => {
                            return {
                                ...c,
                                value: c.label.toLowerCase(),
                            };
                        })}
                    />
                </FormGroup>
                <FormGroup>
                    <Button
                        bgColor="#57CC99"
                        type="submit"
                        color="#fff"
                        width="200px"
                        fSize="18px"
                        margin="10px auto"
                    >
                        Salvar
                    </Button>
                </FormGroup>
            </FormFull>
        </AccountFormWrapper>
    );
};
export default AccountForm;
