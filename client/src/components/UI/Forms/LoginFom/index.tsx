import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useFormik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import { useLoginMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";
import { toErrorMap } from "@utils/toErrorMap";
import { toast } from "react-hot-toast";

interface LoginFormProps {
    hasLogo?: boolean;
    hasRedirect?: boolean;
    nextStep?: any;
}

const LoginForm: React.FC<LoginFormProps> = ({
    hasLogo = true,
    hasRedirect = true,
    nextStep,
}) => {
    const [{ fetching }, login] = useLoginMutation();
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

                if (tutor) {
                    cookieCutter.set("tid", tutor ? tutor.id : "", {
                        expires: 1000 * 60 * 60 * 24 * 365 * 10,
                    });
                }

                toast.success("Bem Vindo!");
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
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="hidden md:flex flex-col my-12">
                <Image src="/logo.svg" width={170} height={50} />
            </div>
            <div className="p-8">
                {fetching ? (
                    <LoadingAnimation />
                ) : (
                    <form onSubmit={formik.handleSubmit}>
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
        </div>
    );
};

export default LoginForm;
