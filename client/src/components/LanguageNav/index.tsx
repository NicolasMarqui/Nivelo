import Dropdown from "@components/UI/Dropdown";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import languages from "@utils/JSON/languages.json";
import Link from "next/link";
import { renderCurrentFlat } from "@utils/renderCurrentFlag";

interface LanguageNavProps {}

const LanguageNav: React.FC<LanguageNavProps> = ({}) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (value: boolean) => setIsOpen(value);

    return (
        <div
            className="relative hidden md:flex flex-none items-center cursor-pointer transition duration-500 ease-in-out ml-3 hover:bg-gray-200 hover:rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
        >
            <img
                src={`https://www.countryflags.io/${renderCurrentFlat(
                    router
                )}/flat/64.png`}
                alt="Language"
                className="w-10 mx-2"
            />
            <MdExpandMore size={17} />

            <Dropdown
                isOpen={isOpen}
                handleChange={handleOpen}
                classes="top-topNav left-0 right-auto w-auto border-3 border-orange"
            >
                {languages
                    .filter((cl) => cl.locale !== router.locale)
                    .map((l) => (
                        <div
                            className="hover:scale-105 transform hover:bg-gray-50"
                            key={l.locale}
                        >
                            <Link href={router.asPath} locale={l.locale}>
                                <img
                                    src={`https://www.countryflags.io/${l.code}/flat/64.png`}
                                    className="w-16"
                                    alt="language"
                                />
                            </Link>
                        </div>
                    ))}
            </Dropdown>
        </div>
    );
};
export default LanguageNav;
