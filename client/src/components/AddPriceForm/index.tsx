import LoadingAnimation from "@components/UI/LoadingAnimation";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Reoverlay } from "reoverlay";
import { useNewPriceMutation } from "src/generated/graphql";

interface AddPriceFormProps {
    classID?: number;
}

const AddPriceForm: React.FC<AddPriceFormProps> = ({ classID }) => {
    const [{ fetching }, newPrice] = useNewPriceMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            time: 0,
            price: 0,
        },
        onSubmit: async (values, { setErrors }) => {
            const { time, price } = values;

            const response = await newPrice({ classID, time, price });
            if (response.data.newPrice.errors) {
                setErrors(toErrorMap(response.data.newPrice.errors as any));
            } else if (response.data.newPrice.price) {
                formik.setFieldValue("time", 0);
                formik.setFieldValue("price", 0);

                toast.success("Horário adicionado com sucesso");
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
                            Tempo de duração da aula - em minutos
                        </label>

                        <input
                            type="number"
                            name="time"
                            placeholder="Tempo de duração da aula"
                            onChange={formik.handleChange}
                            value={formik.values.time}
                            className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange"
                        />
                    </div>

                    <div className="mb-5">
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium text-gray-600"
                        >
                            Preço /hr
                        </label>

                        <input
                            name="price"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange resize-none"
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
            )}
        </div>
    );
};
export default AddPriceForm;
