import { useFormik } from "formik";
import {
    Button,
    Form,
    FormError,
    FormGroup,
    FormInput,
    FormLabel,
} from "../../styles/helpers";
import Link from "next/link";
import { FormFooter } from "./SignupForm.style";
import { useRegisterMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";

export default function SignupForm() {
    const router = useRouter();
    const [, register] = useRegisterMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const response = await register(values);
            if (response.data.signup.errors) {
                setErrors(toErrorMap(response.data.signup.errors));
            } else if (response.data.signup.user) {
                router.push("/");
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <FormLabel htmlFor="name">Nome</FormLabel>
                <FormInput
                    name="name"
                    type="text"
                    placeholder="Nome"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className={`${formik.errors.name ? "has__error" : ""}`}
                />
                {formik.errors.name && (
                    <FormError>{formik.errors.name}</FormError>
                )}
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className={`${formik.errors.email ? "has__error" : ""}`}
                />
                {formik.errors.email && (
                    <FormError>{formik.errors.email}</FormError>
                )}
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Senha"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className={`${formik.errors.password ? "has__error" : ""}`}
                />
                {formik.errors.password && (
                    <FormError>{formik.errors.password}</FormError>
                )}
            </FormGroup>

            <FormFooter>
                <Button>Register</Button>

                <Link href="/login?ref=signup">
                    <a>Já tenho conta</a>
                </Link>
            </FormFooter>
        </Form>
    );
}
