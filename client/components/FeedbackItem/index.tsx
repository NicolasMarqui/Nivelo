import { FeedbackItemWrapper } from "./FeedbackItem.style";
import Image from "next/image";
import { Description } from "../../styles/helpers";
import { MdStar, MdStarBorder } from "react-icons/md";

interface FeedbackItemProps {
    content: string;
    user: string;
    rating?: any;
}

export default function FeedbackItem({}: FeedbackItemProps) {
    return (
        <FeedbackItemWrapper>
            <div className="feedback__avatar">
                <Image src="/assets/student.jpg" width={80} height={80} />
            </div>
            <div className="feedback__info">
                <div className="info__name">
                    <h4>Juarez Junior</h4>
                    <p>3 aulas</p>
                </div>
                <Description fontSize="15px" className="info__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
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
        </FeedbackItemWrapper>
    );
}
