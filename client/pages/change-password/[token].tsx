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
    Description,
    FormFooter,
} from "../../styles/helpers";
import { LoginSignupWrapper } from "../login/Login.style";
import { useChangePasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";
import { useRouter } from "next/router";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import Meta from "../../components/Meta";

const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
    const router = useRouter();
    const [{ fetching }, changePassword] = useChangePasswordMutation();

    const [tokenError, setTokenError] = useState("");

    const formik = useFormik({
        initialValues: {
            newPassword: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const response = await changePassword({
                newPassword: values.newPassword,
                token,
            });
            if (response.data.changePassword.errors) {
                const errorMap = toErrorMap(
                    response.data.changePassword.errors
                );
                if ("token" in errorMap) {
                    setTokenError(errorMap.token);
                } else {
                    setErrors(errorMap);
                }

                setErrors(errorMap);
            } else if (response.data.changePassword.user) {
                router.push("/");
            }
        },
    });

    return (
        <PageWrapper pTop="0">
            <Meta
                title="Alterar Senha"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <LoginSignupWrapper>
                <div className="wrapper__detail">
                    <div className="detail__bg"></div>
                </div>
                <div className="wrapper__form">
                    <Title fontSize="40px" fontWeight="400">
                        Altere sua senha
                    </Title>
                    <Description size="60" color="#b1b1b1">
                        Essa página é válida por 3 dias, caso encontre algum
                        erro faça o pedido de alteração novamente
                    </Description>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormGroup>
                            <FormLabel htmlFor="password">Nova senha</FormLabel>
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

                            {tokenError && <h2>{tokenError}</h2>}
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
