import LoadingAnimation from "@components/UI/LoadingAnimation";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Reoverlay } from "reoverlay";
import { useNewPriceMutation } from "src/generated/graphql";
import InputMask from "react-input-mask";

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
            time: 60,
            // prettier-ignore
            price: 10.55,
        },
        onSubmit: async (values, { setErrors }) => {
            const { time, price } = values;

            const response = await newPrice({
                classID,
                time,
                price: price.toString(),
            });
            if (response.data.newPrice.errors) {
                setErrors(toErrorMap(response.data.newPrice.errors as any));
            } else if (response.data.newPrice.price) {
                formik.setFieldValue("time", 0);
                formik.setFieldValue("price", 10.55);

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

                        <div className="flex items-center">
                            <div className="p-1 mr-2">
                                <p>R$</p>
                            </div>
                            <InputMask
                                mask="99.99"
                                name="price"
                                onChange={formik.handleChange}
                                value={formik.values.price}
                                required
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange resize-none  relative"
                            />
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
        </div>
    );
};
export default AddPriceForm;
