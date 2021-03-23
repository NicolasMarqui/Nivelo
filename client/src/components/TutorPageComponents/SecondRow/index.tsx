import AvalClasses from "@components/TutorPageComponents/AvalClasses";
import Feedback from "@components/TutorPageComponents/Feedback";
import BackButton from "@components/UI/BackButton";
import Breadcumb from "@components/UI/Breadcumb";
import { ClassesProps } from "@types";
import { formatter } from "@utils/agoPtFormat";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { getCategoriesFromArray } from "@utils/getCategoriesFromArray";
import { MdRecordVoiceOver } from "react-icons/md";
import TimeAgo from "react-timeago";
import { useTutorFeedbackQuery } from "src/generated/graphql";

interface SecondRowProps {
    name: string;
    id: number;
    categories: {
        id?: number;
        name?: string;
        icon?: string;
    }[];
    description: string;
    createdAt: string;
    classes: ClassesProps[];
}

const SecondRow: React.FC<SecondRowProps> = ({
    name,
    categories,
    description,
    createdAt,
    classes,
    id,
}) => {
    return (
        <div className="flex-2 md:flex-2 flex flex-col items-center md:items-start px-4 md:px-14">
            <div className="py-4 z-20 -mt-20 hidden md:block">
                <BackButton />
                <Breadcumb
                    list={tutorBreadcumbList(name)}
                    classes="text-center"
                />
            </div>
            <h3 className="text-black222 text-xl md:text-3xl font-bold mt-2 md:mt-5">
                {name}
            </h3>
            <p className="text-sm text-primaryOrange md:-mt-1">
                {getCategoriesFromArray(categories)}
            </p>

            <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                {description}
            </p>

            <div className="mt-5 flex items-center">
                <MdRecordVoiceOver size={20} />
                <p className="text-sm text-black222 ml-2">
                    Tutor Nivelo
                    <TimeAgo
                        date={Number(createdAt)}
                        formatter={formatter}
                        live={true}
                        style={{ marginLeft: 5, fontWeight: 600 }}
                    />
                </p>
            </div>
            <AvalClasses classes={classes} tutorId={id} />
            <Feedback tutorId={id} />
        </div>
    );
};
export default SecondRow;
