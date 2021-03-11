import { useFormik } from "formik";
// prettier-ignore
import { Button, Form, FormGroup, FormInput, FormError, FormLabel, FormHas, Title, Description, FormFooter} from "../../styles/helpers";
import Link from "next/link";
import { useLoginMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";
import cookieCutter from "cookie-cutter";

interface LoginFormProps {
    hasTitle?: boolean;
    formWidth?: string;
    hasAditionalText?: boolean;
    hasRedirect?: boolean;
    nextStep?: any;
}

export default function LoginForm({
    hasTitle = true,
    hasAditionalText = true,
    formWidth,
    hasRedirect = true,
    nextStep,
}: LoginFormProps) {
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
                const tutor = response.data.login.user.tutor;

                cookieCutter.set("tid", tutor ? tutor.id : "", {
                    expires: 1000 * 60 * 60 * 24 * 365 * 10,
                });
                if (hasRedirect) {
                    router.push("/");
                }

                if (nextStep) {
                    nextStep();
                }
            }
        },
    });

    return (
        <>
            {hasTitle && (
                <>
                    <Title fontSize="40px" fontWeight="400" m_auto>
                        Bem vindo de volta
                    </Title>
                    <Description size="60" color="#B1B1B1">
                        Sentimos sua falta!
                    </Description>
                </>
            )}

            <Form
                onSubmit={formik.handleSubmit}
                width={formWidth ? formWidth : ""}
            >
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
                    {hasAditionalText && (
                        <>
                            <Link href="/signup">
                                <FormHas>
                                    Não possui uma conta?{" "}
                                    <span>Crie agora mesmo</span>
                                </FormHas>
                            </Link>
                            <Link href="/password/forgot">
                                <FormHas>
                                    <span>Esqueci minha senha</span>
                                </FormHas>
                            </Link>{" "}
                        </>
                    )}
                    <Button bgColor="#FF4338" color="#fff" bold>
                        Login
                    </Button>
                </FormFooter>
            </Form>
        </>
    );
}
