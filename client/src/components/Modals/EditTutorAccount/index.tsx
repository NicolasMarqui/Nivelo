import { TutorProps } from "@types";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import {
    useUpdateTutorMutation,
    usePixChaveTutorMutation,
} from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface EditTutorAccountProps {
    tutor: TutorProps;
}

const EditTutorAccount: React.FC<EditTutorAccountProps> = ({ tutor }) => {
    const [{ fetching }, updateUser] = useUpdateTutorMutation();
    const [, pixChave] = usePixChaveTutorMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            description: tutor.description || "",
            pix: tutor.chavePix || "",
        },
        onSubmit: async (values, { setErrors }) => {
            if (values.pix !== "" || values.pix !== tutor.chavePix) {
                await pixChave({ tutorId: tutor.id, key: values.pix });
            }

            const response = await updateUser({
                id: tutor.id,
                description: values.description,
            });

            if (response.data.updateTutor.errors) {
                setErrors(toErrorMap(response.data.updateTutor.errors));
            } else if (response.data.updateTutor.tutor) {
                Reoverlay.hideModal();
                toast.success("Descrição salva!");
            }
        },
    });

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-black222">
                Suas Informações
            </h2>
            {fetching ? (
                <LoadingAnimation />
            ) : (
                <div className="my-4 w-full">
                    <form onSubmit={formik.handleSubmit}>
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
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222 h-52 resize-none md:w-96"
                            />
                            {formik.errors.description && (
                                <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                    {formik.errors.description}
                                </p>
                            )}
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-gray-600"
                            >
                                Chave PIX
                            </label>

                            <input
                                name="pix"
                                onChange={formik.handleChange}
                                value={formik.values.pix}
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222 resize-none md:w-96"
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
export default withUrqlClient(createUrqlClient)(EditTutorAccount as any);
