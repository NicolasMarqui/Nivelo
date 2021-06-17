import { ClassesProps } from "@types";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useUpdateClassMutation } from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";
import classLevels from "@utils/JSON/classesLevels.json";
import Select from "react-select";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import EditHorarios from "../EditHorarios";

interface EditClassProps {
    singleClass: ClassesProps;
}

const EditClass: React.FC<EditClassProps> = ({ singleClass }) => {
    const [{ fetching }, updateClass] = useUpdateClassMutation();

    const handleClose = () => {
        Reoverlay.hideAll();
    };

    const formik = useFormik({
        initialValues: {
            name: singleClass.name,
            description: singleClass.description || "",
            level: singleClass.level,
        },
        onSubmit: async (values, { setErrors }) => {
            const { name, description, level } = values;

            const response = await updateClass({
                id: singleClass.id,
                name,
                description,
                level,
            });
            if (response.data.updateClass.errors) {
                setErrors(toErrorMap(response.data.updateClass.errors as any));
            } else if (response.data.updateClass.classes) {
                toast.success("Detalhes da aula atualizados!");
                Reoverlay.hideModal();
            }
        },
    });

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-black222 mb-8">
                Editar aula - {singleClass.name}
            </h2>
            {fetching ? (
                <LoadingAnimation />
            ) : (
                <form onSubmit={formik.handleSubmit} className="w-full">
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
                            className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222"
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
                            className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange dark:text-black222 h-52 resize-none"
                        />
                        {formik.errors.description && (
                            <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                {formik.errors.description}
                            </p>
                        )}
                    </div>

                    <div className="b-5">
                        <Select
                            menuPlacement="top"
                            name="level"
                            closeMenuOnSelect={true}
                            placeholder={singleClass.level || "Nível da aula"}
                            className="dark:text-black222"
                            onChange={(e: any) =>
                                formik.setFieldValue("level", e.value)
                            }
                            options={classLevels}
                        />
                        {formik.errors.level && (
                            <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                {formik.errors.level}
                            </p>
                        )}
                    </div>

                    <div className="h-24 my-2">
                        <div
                            className="w-full p-3 mt-4 bg-primaryPurple text-white rounded shadow hover:bg-lightPurple text-center cursor-pointer"
                            onClick={() =>
                                Reoverlay.showModal(EditHorarios, {
                                    classID: singleClass.id,
                                })
                            }
                        >
                            Editar Horários e preços
                        </div>
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
            )}
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(EditClass as any);
