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
        </div>
    );
};
export default FirstRow;
