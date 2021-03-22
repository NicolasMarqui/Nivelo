import { TutorFeedbackProps } from "@types";
import { checkAvatar } from "@utils/checkAvatar";
import ReactStarsRating from "react-awesome-stars-rating";

interface FeedbackItemProps {
    feed: TutorFeedbackProps;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feed }) => {
    const { user, rating, content, createdAt } = feed;

    return (
        <div className="flex bg-gray-100 rounded-xl my-2 p-4 flex-col md:flex-row justify-center md:justify-start">
            <div className="flex-none flex justify-center md:-ml-12">
                <img
                    src={checkAvatar(user.avatar, user.name)}
                    className=" rounded-full object-cover h-14 w-14 md:h-20 md:w-20  z-20 block self-center"
                />
            </div>
            <div className="px-3 md:px-6">
                <h3 className="text-black222 text-base font-bold mt-2 text-center md:text-left">
                    {user.name}
                </h3>

                <p className="mt-2 text-base text-gray-400 md:w-4/5 text-center md:text-left">
                    {content}
                </p>

                <div className="flex-1 flex items-center justify-center md:justify-start mt-4 order-3 md:order-2">
                    <ReactStarsRating
                        id="rating"
                        value={rating}
                        className="flex pointer-events-none"
                    />
                </div>
            </div>
        </div>
    );
};
export default FeedbackItem;
