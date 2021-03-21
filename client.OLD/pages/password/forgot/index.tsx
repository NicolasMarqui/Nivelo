import { useState } from "react";
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
    Title,
    FormFooter,
} from "../../../styles/helpers";
import { LoginSignupWrapper } from "../../login/Login.style";
import { useForgotPasswordMutation } from "../../../generated/graphql";
import Meta from "../../../components/Meta";

const ForgotPassword: NextPage<{ token: string }> = ({ token }) => {
    const [{ fetching }, forgotPassword] = useForgotPasswordMutation();

    const [complete, setComplete] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: async (values, { setErrors }) => {
            await forgotPassword(values);
            setComplete(true);
        },
    });

    return (
        <PageWrapper pTop="0">
            <Meta
                title="Esqueci minha senha"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <LoginSignupWrapper>
                <div className="wrapper__detail">
                    <div className="detail__bg"></div>
                </div>
                <div className="wrapper__form">
                    <Title fontSize="40px" fontWeight="400">
                        Seu email
                    </Title>
                    {!complete ? (
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <FormInput
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    className={`${
                                        formik.errors.email ? "has__error" : ""
                                    }`}
                                />
                                {formik.errors.email && (
                                    <FormError>{formik.errors.email}</FormError>
                                )}
                            </FormGroup>

                            <FormFooter>
                                <Button bgColor="#FF4338" color="#fff" bold>
                                    ENVIAR
                                </Button>
                            </FormFooter>
                        </Form>
                    ) : (
                        <p>Done</p>
                    )}
                </div>
            </LoginSignupWrapper>
        </PageWrapper>
    );
};

export default ForgotPassword;
