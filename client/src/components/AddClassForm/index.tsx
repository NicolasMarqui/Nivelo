import { Reoverlay } from "reoverlay";
import Select from "react-select";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNewClassMutation } from "src/generated/graphql";
import cookieCutter from "cookie-cutter";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import classLevels from "@utils/JSON/classesLevels.json";

interface AddClassFormProps {
    nextStep?: any;
    handleClassIDChange?: (i: number) => any;
}

const AddClassForm: React.FC<AddClassFormProps> = ({
    nextStep,
    handleClassIDChange,
}) => {
    const [tutorId, setTutorId] = useState(cookieCutter.get("tid"));
    const [{ fetching }, newClass] = useNewClassMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            level: "",
        },
        onSubmit: async (values, { setErrors }) => {
            const { name, description, level } = values;

            const response = await newClass({
                tutorId: Number(tutorId),
                name,
                description,
                level,
            });
            if (response.data.newClass.errors) {
                setErrors(toErrorMap(response.data.newClass.errors as any));
            } else if (response.data.newClass.classes) {
                handleClassIDChange(response.data.newClass.classes.id);
                toast.success("Aula adicionada");
                nextStep();
            }
        },
    });

    return (
        <div className="mt-2 w-full">
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
                            placeholder={"Nível da aula"}
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
        </div>
    );
};
export default AddClassForm;
