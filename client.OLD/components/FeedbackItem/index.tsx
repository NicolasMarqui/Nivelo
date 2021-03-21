import { FeedbackItemWrapper } from "./FeedbackItem.style";
import Image from "next/image";
import { Description } from "../../styles/helpers";
import { MdStar, MdStarBorder } from "react-icons/md";
import Avatar from "../Avatar";

interface FeedbackItemProps {
    feed: {
        id: number;
        rating: number;
        content: string;
        createdAt: string;
        user: {
            id: number;
            name: string;
            avatar?: string | null;
        };
    };
}

export default function FeedbackItem({ feed }: FeedbackItemProps) {
    return (
        <FeedbackItemWrapper>
            {feed && (
                <>
                    <div className="feedback__avatar">
                        <Avatar avatar={feed.user.avatar} />
                    </div>
                    <div className="feedback__info">
                        <div className="info__name">
                            <h4>{feed.user.name}</h4>
                        </div>
                        <Description fontSize="15px" className="info__desc">
                            {feed.content}
                        </Description>
                        <div className="info__rating">
                            <MdStar size={24} color="yellow" />
                            <MdStar size={24} color="yellow" />
                            <MdStar size={24} color="yellow" />
                            <MdStar size={24} color="yellow" />
                            <MdStarBorder size={24} />
                        </div>
                    </div>
                    <div className="feedback__hat">
                        <Image src="/assets/hat.svg" height={90} width={90} />
                    </div>
                </>
            )}
        </FeedbackItemWrapper>
    );
}
