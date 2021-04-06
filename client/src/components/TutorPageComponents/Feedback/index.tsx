import FeedbackItem from "@components/FeedbackItem";
import EmptyAnimation from "@components/UI/EmptyAnimation";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useTutorFeedbackQuery } from "src/generated/graphql";
import ReactPaginate from "react-paginate";
import { getTotalPages } from "@utils/getTotalPages";

interface FeedbackProps {
    tutorId: number;
}

const Feedback: React.FC<FeedbackProps> = ({ tutorId }) => {
    const [{ data, fetching, error }] = useTutorFeedbackQuery({
        variables: { id: tutorId },
    });

    const handlePaginationFeedback = (e: number) => {
        console.log(e);
    };

    return (
        <div
            className="flex mt-20 flex-col relative w-full justify-center md:justify-start"
            id="feedbacks"
        >
            <h3 className="text-black222 text-center md:text-left text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Feedbacks
            </h3>

            {fetching || error ? (
                <LoadingAnimation />
            ) : !data ||
              !data.getTutorFeedbacks ||
              data.getTutorFeedbacks.length === 0 ? (
                <EmptyAnimation />
            ) : (
                <div className="mt-5">
                    {data.getTutorFeedbacks.map((f) => (
                        <FeedbackItem key={f.id} feed={f} />
                    ))}

                    <div className="my-4">
                        <ReactPaginate
                            previousLabel={"Anterior"}
                            nextLabel={"Próximo"}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                            pageCount={getTotalPages(
                                data.getTutorFeedbacks.length,
                                5
                            )}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={(e) =>
                                handlePaginationFeedback(e.selected)
                            }
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
export default Feedback;
