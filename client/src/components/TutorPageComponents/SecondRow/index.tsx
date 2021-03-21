import AvalClasses from "@components/TutorPageComponents/AvalClasses";
import Feedback from "@components/TutorPageComponents/Feedback";
import Breadcumb from "@components/UI/Breadcumb";
import { tutorBreadcumbList } from "@utils/breadumbList";
import { MdRecordVoiceOver } from "react-icons/md";

interface SecondRowProps {}

const SecondRow: React.FC<SecondRowProps> = ({}) => {
    return (
        <div className="flex-2 md:flex-2 flex flex-col items-center md:items-start px-4 md:px-14">
            <div className="py-4 z-20 -mt-14 block">
                <Breadcumb list={tutorBreadcumbList} classes="text-center" />
            </div>
            <h3 className="text-black222 text-xl md:text-3xl font-bold mt-2 md:mt-4">
                Nicolas Marqui
            </h3>
            <p className="text-sm text-primaryOrange md:-mt-1">
                Javascript, Algoritimos
            </p>

            <p className="mt-4 text-base text-desc md:w-4/5 text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
            </p>

            <div className="mt-5 flex items-center">
                <MdRecordVoiceOver size={20} />
                <p className="text-sm text-black222 ml-2">
                    Tutor Nivelo desde
                    <span className="mx-1 font-bold">09/10/2022</span>
                </p>
            </div>
            <AvalClasses />
            <Feedback />
        </div>
    );
};
export default SecondRow;
