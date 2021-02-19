import { useFormik } from "formik";
import {
    Button,
    Form,
    FormGroup,
    FormInput,
    FormError,
    FormLabel,
    FormHas,
    Title,
    Description,
    FormFooter,
} from "../../styles/helpers";
import Link from "next/link";
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
        <>
            <Title fontSize="40px" fontWeight="400" m_auto>
                Bem vindo de volta
            </Title>
            <Description size="60" color="#B1B1B1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
            </Description>

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
                        className={`${
                            formik.errors.password ? "has__error" : ""
                        }`}
                    />
                    {formik.errors.password && (
                        <FormError>{formik.errors.password}</FormError>
                    )}
                </FormGroup>

                <FormFooter>
                    <Link href="/signup">
                        <FormHas>
                            Não possui uma conta? <span>Crie agora mesmo</span>
                        </FormHas>
                    </Link>
                    <Link href="/password/forgot">
                        <FormHas>
                            <span>Esqueci minha senha</span>
                        </FormHas>
                    </Link>
                    <Button bgColor="#FF4338" color="#fff" bold>
                        Login
                    </Button>
                </FormFooter>
            </Form>
        </>
    );
}
