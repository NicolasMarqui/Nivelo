import { useTutorFeedbackQuery } from "../../generated/graphql";
import FeedbackItem from "../FeedbackItem";

interface FeedbackProps {
    tutorId: number;
}

const Feedback: React.FC<FeedbackProps> = ({ tutorId }: FeedbackProps) => {
    const [{ data, fetching }] = useTutorFeedbackQuery({
        variables: { id: tutorId },
    });

    return (
        <>
            {fetching ? (
                <p>Loading</p>
            ) : !data && data.getTutorFeedbacks.length === 0 ? (
                <p>Esse tutor não possui feedbacks!</p>
            ) : (
                data.getTutorFeedbacks.map((feed) => {
                    // @ts-ignore
                    return <FeedbackItem feed={feed} key={feed.id} />;
                })
            )}
        </>
    );
};
export default Feedback;
