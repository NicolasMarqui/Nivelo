interface FeedbackProps {}

const Feedback: React.FC<FeedbackProps> = ({}) => {
    return (
        <div className="flex mt-20 flex-col relative w-full justify-center md:justify-start">
            <h3 className="text-black222 text-center md:text-left text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Feedbacks
            </h3>
        </div>
    );
};
export default Feedback;
