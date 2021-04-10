import BgIcon from "@components/UI/BgIcon";
import { MdRecordVoiceOver } from "react-icons/md";

interface List4uProps {}

const List4u: React.FC<List4uProps> = ({}) => {
    return (
        <div className="flex flex-wrap items-center flex-col md:flex-row mt-6 px-4 md:px-0">
            <div className="flex flex-col w-full md:w-1/2 lg:flex-1 my-3 md:my-6">
                <BgIcon
                    icon={<MdRecordVoiceOver size={30} color="#FF4338" />}
                    bgColor="rgba(231, 111, 81, 0.31)"
                />
                <h3 className="font-bold text-lg text-center md:text-left">
                    Aprenda com os melhores
                </h3>
                <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:flex-1 my-3 md:my-6">
                <BgIcon
                    icon={<MdRecordVoiceOver size={30} color="#68E1FD" />}
                    bgColor="rgba(104, 225, 253, 0.31)"
                />
                <h3 className="font-bold text-lg text-center md:text-left">
                    Aprenda com os melhores
                </h3>
                <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:flex-1 my-3 md:my-6">
                <BgIcon
                    icon={<MdRecordVoiceOver size={30} color="#57CC99" />}
                    bgColor="rgba(87, 204, 153, 0.31)"
                />
                <h3 className="font-bold text-lg text-center md:text-left">
                    Aprenda com os melhores
                </h3>
                <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
            <div className="flex flex-col w-full md:w-1/2 lg:flex-1 my-3 md:my-6">
                <BgIcon
                    icon={<MdRecordVoiceOver size={30} color="#F4D35E" />}
                    bgColor="rgba(244, 211, 94, 0.31)"
                />
                <h3 className="font-bold text-lg text-center md:text-left">
                    Aprenda com os melhores
                </h3>
                <p className="text-desc text-center md:text-left mt-1 md:w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>
        </div>
    );
};
export default List4u;
