import ReactStarsRating from "react-awesome-stars-rating";
import { checkAvatar } from "@utils/checkAvatar";
import Tooltip from "react-tooltip";

interface FirstRowProps {
    avatar: string;
    rating: number;
    type: string;
    name: string;
}

const FirstRow: React.FC<FirstRowProps> = ({ avatar, rating, type, name }) => {
    return (
        <div className="flex-none flex flex-col md:self-start justify-center">
            <img
                src={checkAvatar(avatar, name)}
                className="flex-none rounded-full order-2 md:order-1 object-cover h-36 w-36 z-20 -mt-20 border-4 border-orange block self-center"
            />

            <div
                className="flex-1 flex items-center justify-center mt-4 order-3 md:order-2"
                data-for="rating"
                data-tip={`${
                    rating === 0 ? "Sem avaliações" : `Nota ${rating}`
                }`}
            >
                <ReactStarsRating
                    id="rating"
                    value={rating}
                    className="flex pointer-events-none"
                />
                <Tooltip id="rating" effect="solid" place="top" />
            </div>

            <div
                className="hidden md:flex items-center justify-center rounded-lg bg-primaryPurple mt-2 md:mt-4 py-1 order-3 px-2"
                data-for="type"
                data-tip="Esse tutor ajuda todos na comunidade"
            >
                <p className="text-white text-sm">{type}</p>
                <Tooltip id="type" effect="solid" place="bottom" />
            </div>
        </div>
    );
};
export default FirstRow;
