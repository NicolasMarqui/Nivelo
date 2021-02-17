import { NextPage } from "next";
import { useFormik } from "formik";
import {
    PageWrapper,
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
import { LoginSignupWrapper } from "../login/Login.style";
import Link from "next/link";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
    const formik = useFormik({
        initialValues: {
            newPassword: "",
        },
        onSubmit: async (values, { setErrors }) => {
            console.log(values);
        },
    });

    return (
        <PageWrapper pTop="0">
            <LoginSignupWrapper>
                <div className="wrapper__detail">
                    <div className="detail__bg"></div>
                </div>
                <div className="wrapper__form">
                    <Title fontSize="40px" fontWeight="400">
                        Altere sua senha
                    </Title>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="password">Senha</FormLabel>
                            <FormInput
                                name="password"
                                type="password"
                                placeholder="Senha"
                                onChange={formik.handleChange}
                                value={formik.values.newPassword}
                                className={`${
                                    formik.errors.newPassword
                                        ? "has__error"
                                        : ""
                                }`}
                            />
                            {formik.errors.newPassword && (
                                <FormError>
                                    {formik.errors.newPassword}
                                </FormError>
                            )}
                        </FormGroup>

                        <FormFooter>
                            <Button bgColor="#FF4338" color="#fff" bold>
                                ALTERAR
                            </Button>
                        </FormFooter>
                    </Form>
                </div>
            </LoginSignupWrapper>
        </PageWrapper>
    );
};

ChangePassword.getInitialProps = ({ query }) => {
    return {
        token: query.token as string,
    };
};

export default ChangePassword;
