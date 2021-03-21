import Link from "next/link";
import { MdStarBorder } from "react-icons/md";

interface TutorCardSmallProps {}

const TutorCardSmall: React.FC<TutorCardSmallProps> = ({}) => {
    return (
        <div className="flex bg-white flex-col shadow-md items-center justify-center mx-4 p-5 overflow-auto relative z-10 tutorCard__small">
            <div className="flex-1">
                <img
                    src="https://avatars.dicebear.com/api/bottts/aoba.svg"
                    width={119}
                    height={119}
                    className="rounded-3xl"
                />
            </div>
            <div className="flex flex-col mt-2">
                <h3 className="font-bold text-center">Nicolas Marqui</h3>
                <p className="text-base text-primaryOrange text-center">
                    Javascript, Algoritimos
                </p>

                <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                </p>
            </div>

            <div className="flex items-center jusify-center mt-4">
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
                <MdStarBorder size={20} />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center w-full mt-7">
                <h4 className="text-base text-black222">
                    Preço por hora a partir de:
                </h4>
                <p className="text-base text-primaryOrange">
                    R$ <span className="font-bold">8.00</span>
                </p>
            </div>

            <div className="flex items-center justify-center bg-primaryOrange mt-7 w-full">
                <Link href="/">
                    <a className="text-white font-bold text-lg">Ver mais</a>
                </Link>
            </div>
        </div>
    );
};
export default TutorCardSmall;
