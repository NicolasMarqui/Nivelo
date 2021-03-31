import Container from "@components/container";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useLoginMutation, useRegisterMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";
import { toErrorMap } from "@utils/toErrorMap";
import { toast } from "react-hot-toast";

interface SignupProps {}

const Signup: React.FC<SignupProps> = ({}) => {
    const [{ fetching }, register] = useRegisterMutation();
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            name: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const response = await register(values);

            if (response.data.signup.errors) {
                setErrors(toErrorMap(response.data.signup.errors));
            } else if (response.data.signup.user) {
                const tutor = response.data.signup.user.tutor;

                if (tutor) {
                    cookieCutter.set("tid", tutor ? tutor.id : "", {
                        expires: 1000 * 60 * 60 * 24 * 365 * 10,
                    });
                }

                toast.success("Bem Vindo!");
                router.push("/");
            }
        },
    });

    return (
        <Container>
            <div className="p-8">
                {fetching ? (
                    <LoadingAnimation />
                ) : (
                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Nome
                            </label>

                            <input
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                            />
                            {formik.errors.name && (
                                <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                    {formik.errors.name}
                                </p>
                            )}
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Email
                            </label>

                            <input
                                type="text"
                                name="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                            />
                            {formik.errors.email && (
                                <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                    {formik.errors.email}
                                </p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Senha
                            </label>

                            <input
                                type="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                            />
                            {formik.errors.password && (
                                <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            className="w-full p-3 mt-4 bg-primaryOrange text-white rounded shadow hover:bg-lightOrange"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                )}
            </div>

            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <a href="#" className="font-medium text-indigo-500">
                    Criar conta
                </a>

                <a href="#" className="text-gray-600">
                    Esqueceu a senha?
                </a>
            </div>
        </Container>
    );
};
export default Signup;
