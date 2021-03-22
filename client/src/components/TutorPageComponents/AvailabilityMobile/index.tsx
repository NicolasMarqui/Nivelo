import { MdEvent, MdChatBubbleOutline } from "react-icons/md";
import IconButton from "@components/UI/IconButton";

interface AvailabilityMobileProps {}

const AvailabilityMobile: React.FC<AvailabilityMobileProps> = ({}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white flex flex-row items-center justify-between py-2 px-4 shadow-lg z-20">
            <div className="flex-1">
                <h5 className="text-left text-base">
                    Preço por hora a partir de
                </h5>
                <p className="text-2xl text-primaryOrange text-left font-bold">
                    R$8.00
                </p>
            </div>
            <div className="flex-none flex justify-end">
                <IconButton
                    icon={<MdEvent size={18} color="#222" />}
                    classes="bg-primaryPink hover:bg-lightOrange text-white ml-0"
                />
                <IconButton
                    icon={<MdChatBubbleOutline size={18} color="#222" />}
                    classes="ml-2 bg-primaryGreen hover:bg-lightGreen text-white"
                />
            </div>
        </div>
    );
};
export default AvailabilityMobile;
