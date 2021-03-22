import { MdStarBorder } from "react-icons/md";

interface FirstRowProps {}

const FirstRow: React.FC<FirstRowProps> = ({}) => {
    return (
        <div className="flex-none flex flex-col md:self-start justify-center">
            <img
                src="/images/example.jpg"
                className="flex-none rounded-full order-2 md:order-1 object-cover h-36 w-36 z-20 -mt-20 border-4 border-orange block self-center"
            />

            <div className="flex-1 flex items-center justify-center mt-4 order-3 md:order-2">
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
            </div>

            <div className="hidden md:flex items-center justify-center rounded-lg bg-primaryPurple mt-2 md:mt-4 py-1 order-3">
                <p className="text-white text-base">Tutor</p>
            </div>
        </div>
    );
};
export default FirstRow;
