import { useFormik } from "formik";
import {
    Button,
    Form,
    FormGroup,
    FormInput,
    FormError,
    FormLabel,
} from "../../styles/helpers";
import Link from "next/link";
import { FormFooter } from "./LoginForm.style";
import { useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";

export default function LoginForm() {
    const [, login] = useLoginMutation();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const response = await login(values);
            if (response.data.login.errors) {
                setErrors(toErrorMap(response.data.login.errors));
            } else if (response.data.login.user) {
                router.push("/");
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
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
                <Button>Login</Button>

                <Link href="/signup?ref=login">
                    <a>Não tenho conta</a>
                </Link>
            </FormFooter>
        </Form>
    );
}
