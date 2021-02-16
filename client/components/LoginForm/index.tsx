import { useFormik } from "formik";
import {
    Button,
    Form,
    FormGroup,
    FormInput,
    FormLabel,
} from "../../styles/helpers";
import Link from "next/link";
import { BorderedButton } from "../../pages/tutors/Tutors.styles";
import { FormFooter } from "./LoginForm.style";

export default function LoginForm() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values);
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
                />
            </FormGroup>
            <FormGroup>
                <FormLabel htmlFor="password">Senha</FormLabel>
                <FormInput
                    name="password"
                    type="password"
                    placeholder="Senha"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
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
