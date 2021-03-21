import Dropdown from "@components/UI/Dropdown";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

interface LanguageNavProps {}

const LanguageNav: React.FC<LanguageNavProps> = ({}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (value: boolean) => setIsOpen(value);

    return (
        <div
            className="relative hidden md:flex flex-none items-center cursor-pointer transition duration-500 ease-in-out ml-3 hover:bg-gray-200 hover:rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
        >
            <img
                src="https://www.countryflags.io/us/flat/64.png"
                className="w-10 mx-2"
            />
            <MdExpandMore size={17} />

            <Dropdown
                isOpen={isOpen}
                handleChange={handleOpen}
                classes="top-topNav left-0 right-auto w-auto border-3 border-orange"
            >
                Hemlo
            </Dropdown>
        </div>
    );
};
export default LanguageNav;
