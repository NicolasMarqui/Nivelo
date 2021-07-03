import { TutorFeedbackProps } from "@types";
import { checkAvatar } from "@utils/checkAvatar";
import ReactStarsRating from "react-awesome-stars-rating";
import TimeAgo from "react-timeago";
import { formatter } from "@utils/agoPtFormat";
import Tooltip from "react-tooltip";

interface FeedbackItemProps {
    feed: TutorFeedbackProps;
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ feed }) => {
    const { user, rating, content, createdAt } = feed;

    return (
        <div className="flex bg-gray-100 dark:bg-darkThirdBg rounded-xl my-2 p-8 flex-col md:flex-row justify-center md:justify-start">
            <div className="flex-none flex justify-center md:-ml-20">
                <img
                    src={checkAvatar(user.avatar, user.name)}
                    className=" rounded-full object-cover h-14 w-14 md:h-32 md:w-32  z-20 block self-center"
                />
            </div>
            <div className="px-3 md:px-6 flex-1">
                <h3 className="text-black222 dark:text-white text-xl font-bold text-center md:text-left">
                    {user.name}
                </h3>

                <p className="mt-2 text-base text-gray-500 dark:text-gray-200 md:w-4/5 text-center md:text-left">
                    {content || "Nenhun detalhe foi dado"}
                </p>

                <div
                    className="flex-1 flex items-center justify-center md:justify-start mt-5 order-3 md:order-2"
                    data-for="notaFee"
                    data-tip={`Nota: ${rating}`}
                >
                    <ReactStarsRating
                        id="rating"
                        value={rating}
                        className="flex pointer-events-none"
                    />
                    <Tooltip id="notaFee" place="top" />
                </div>

                <div className="mt-5">
                    <p className="text-gray-400 text-sm">
                        Feedback criado
                        <span>
                            <TimeAgo
                                date={Number(createdAt)}
                                formatter={formatter}
                                live={true}
                                style={{ marginLeft: 5, fontWeight: 600 }}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default FeedbackItem;
