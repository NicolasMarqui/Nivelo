import {
    useNewFeedbackMutation,
    useUpdateTutorRatingMutation,
} from "src/generated/graphql";
import ModalContainer from "../ModalContainer";
import { Reoverlay } from "reoverlay";
import { toErrorMap } from "@utils/toErrorMap";
import { useFormik } from "formik";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import ReactStarsRating from "react-awesome-stars-rating";
import toast from "react-hot-toast";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "@utils/createUrqlClient";

interface AddFeedbackProps {
    userID: number;
    tutorID: number;
}

const AddFeedback: React.FC<AddFeedbackProps> = ({ userID, tutorID }) => {
    const [{ fetching, error }, newFeedback] = useNewFeedbackMutation();
    const [{ fetching: fetUp }, updateRating] = useUpdateTutorRatingMutation();

    const handleClose = () => {
        Reoverlay.hideModal();
    };

    const formik = useFormik({
        initialValues: {
            description: "",
            rating: 0,
        },
        onSubmit: async (values, { setErrors }) => {
            const { description, rating } = values;

            const response = await newFeedback({
                content: description,
                tutorID,
                userID,
                rating,
            });
            if (response.data.newFeedback.errors) {
                setErrors(toErrorMap(response.data.newFeedback.errors as any));
                toast.error(
                    "Ops, você já deixou um feedback para esse tutor no passado, é possivel deixar apenas um feedback por tutor!"
                );
            } else if (response.data.newFeedback.feedback) {
                await updateRating({ tutorID });
                toast.success("Obrigado pelo feedback!!");
                handleClose();
            }
        },
    });

    return (
        <ModalContainer>
            <h2 className="text-2xl md:text-3xl font-semibold">
                Adicionar Feedback
            </h2>
            <p>Conte-nos mais como foi sua experiencia de ensino!!</p>

            <div className="mt-4 w-full">
                {fetching || error || fetUp ? (
                    <LoadingAnimation />
                ) : (
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
                                className="block w-full p-3 rounded bg-gray-100 border border-transparent focus:outline-none focus:border-orange h-52 resize-none"
                            />
                        </div>

                        <div className="mb-5 flex items-end">
                            <div className="flex-2 fle-col">
                                <label
                                    htmlFor="description"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Sua nota
                                </label>

                                <ReactStarsRating
                                    id="ratingFeedback"
                                    value={formik.values.rating}
                                    onChange={(e) =>
                                        formik.setFieldValue("rating", e)
                                    }
                                    className="flex outline-none"
                                />
                            </div>
                            <div className="flex-none">
                                <h3 className="text-lg text-right">
                                    Nota final{" "}
                                    <span className="block font-bold">
                                        {formik.values.rating}
                                    </span>
                                </h3>
                            </div>
                        </div>

                        {formik.errors.description && (
                            <p className="my-1 bg-red-200 p-2 text-sm text-white text-center">
                                {formik.errors.description}
                            </p>
                        )}

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
        </ModalContainer>
    );
};
export default withUrqlClient(createUrqlClient)(AddFeedback as any);
