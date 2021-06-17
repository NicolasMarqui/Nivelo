import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useRegisterMutation } from "src/generated/graphql";
import { toErrorMap } from "@utils/toErrorMap";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useCookies } from "react-cookie";

interface SignupFormProps {}

const SignupForm: React.FC<SignupFormProps> = ({}) => {
    const { t } = useTranslation("register");
    const [{ fetching }, register] = useRegisterMutation();
    const router = useRouter();
    const [cookie, setCookie] = useCookies();

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
                setCookie("gASDFW2", response.data.signup.user.id, {
                    path: "/",
                    maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // Expires after 1hr
                });
                toast.success("Bem Vindo!");
                router.push("/dashboard");
            }
        },
    });

    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
            <div className="hidden md:flex flex-col my-3">
                <Image src="/logo.svg" width={170} height={50} />
            </div>
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
                                {t("name")}
                            </label>

                            <input
                                type="text"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222"
                            />
                            {formik.errors.name && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
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
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222"
                            />
                            {formik.errors.email && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
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
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222"
                            />
                            {formik.errors.password && (
                                <p className="my-1 bg-red-400 p-2 text-sm text-white text-center">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            className="w-full p-3 mt-4 bg-primaryOrange text-white rounded shadow hover:bg-lightOrange"
                            type="submit"
                        >
                            {t("create")}
                        </button>
                    </form>
                )}
            </div>

            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                <Link href="/login">
                    <a href="#" className="font-medium text-indigo-500">
                        {t("alreadyHave")}
                    </a>
                </Link>
            </div>
        </div>
    );
};
export default SignupForm;
