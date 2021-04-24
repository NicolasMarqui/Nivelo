import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMoreInfoUserMutation } from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import countries from "@utils/JSON/countries.json";
import { meProps } from "@types";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import Select from "react-select";
import { Reoverlay } from "reoverlay";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface EditUserAccountProps {
    user: meProps | null | undefined;
    fetchingData: boolean;
}

const EditUserAccount: React.FC<EditUserAccountProps> = ({
    user,
    fetchingData,
}) => {
    const [{ fetching }, moreInfoUser] = useMoreInfoUserMutation();
    const router = useRouter();

    if (fetchingData) {
        return <LoadingAnimation />;
    }

    const handleClose = () => Reoverlay.hideModal();

    //prettier-ignore
    const [userCountry, setUserCountry] = useState( user ? user.me.country : countries[31]);
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: user ? user.me.name : "",
            description: user ? user.me.description : "",
            country: userCountry,
        },
        onSubmit: async (values, { setErrors }) => {
            setIsLoading(true);

            const response = await moreInfoUser({
                id: user.me.id,
                name: values.name,
                description: values.description,
                country: userCountry as any,
            });
            if (response.data.addMoreInfo.errors) {
                setErrors(toErrorMap(response.data.addMoreInfo.errors));
                setIsLoading(false);
            } else if (response.data.addMoreInfo.user) {
                toast.success("Alterações feitas com sucesso!");
                handleClose();
            }
        },
    });

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">
                Suas Informações
            </h2>

            {fetching ? (
                <LoadingAnimation />
            ) : (
                <div className="my-4 w-full">
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
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Descrição
                            </label>

                            <textarea
                                name="description"
                                onChange={formik.handleChange}
                                value={formik.values.description}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange h-52 resize-none md:w-96"
                            />
                            {formik.errors.description && (
                                <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                    {formik.errors.description}
                                </p>
                            )}
                        </div>

                        <div className="b-5">
                            <Select
                                name="country"
                                closeMenuOnSelect={true}
                                value={formik.values.country as any}
                                menuPlacement="top"
                                placeholder={userCountry}
                                onChange={(e) => setUserCountry(e.label)}
                                options={countries.map((c: any) => {
                                    return {
                                        ...c,
                                        value: c.label.toLowerCase(),
                                    };
                                })}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center">
                            <button
                                className="w-full p-3 mt-4 bg-primaryGreen text-white rounded shadow hover:bg-lightGreen"
                                type="submit"
                            >
                                Salvar
                            </button>
                            <button
                                className="w-full p-3 mt-4 bg-red-400 text-white rounded shadow hover:bg-lightOrange md:ml-2"
                                onClick={handleClose}
                            >
                                Fechar
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(EditUserAccount as any);
