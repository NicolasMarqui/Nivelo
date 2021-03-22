import FeedbackItem from "@components/FeedbackItem";
import LoadingAnimation from "@components/UI/LoadingAnimation";
import { useTutorFeedbackQuery } from "src/generated/graphql";

interface FeedbackProps {
    tutorId: number;
}

const Feedback: React.FC<FeedbackProps> = ({ tutorId }) => {
    const [{ data, fetching, error }] = useTutorFeedbackQuery({
        variables: { id: tutorId },
    });

    return (
        <div className="flex mt-20 flex-col relative w-full justify-center md:justify-start">
            <h3 className="text-black222 text-center md:text-left text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Feedbacks
            </h3>

            {fetching || error ? (
                <LoadingAnimation />
            ) : !data ||
              !data.getTutorFeedbacks ||
              data.getTutorFeedbacks.length === 0 ? (
                <p>Niente</p>
            ) : (
                <div className="mt-5">
                    {data.getTutorFeedbacks.map((f) => (
                        <FeedbackItem key={f.id} feed={f} />
                    ))}
                </div>
            )}
        </div>
    );
};
export default Feedback;
