import Dropdown from "@components/UI/Dropdown";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdExpandMore } from "react-icons/md";
import languages from "@utils/JSON/languages.json";
import Link from "next/link";
import { renderCurrentFlat } from "@utils/renderCurrentFlag";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "next-themes";

interface LanguageNavProps {}

const LanguageNav: React.FC<LanguageNavProps> = ({}) => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

    const handleOpen = (value: boolean) => setIsOpen(value);

    return (
        <div className="relative hidden md:flex flex-none items-center justify-center cursor-pointer transition duration-500 ease-in-out ml-3 ">
            <div
                className="flex-2 flex items-center justify-center relative hover:bg-gray-200 hover:rounded-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img
                    src={`/icons/${renderCurrentFlat(router)}.png`}
                    alt="Language"
                    className="w-10 ml-2"
                />
                <MdExpandMore size={17} color={isDarkMode ? "#fff" : "#000"} />

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
                                        src={`/icons/${l.locale}.png`}
                                        className="w-16"
                                        alt={`language-${l.locale}`}
                                    />
                                </Link>
                            </div>
                        ))}
                </Dropdown>
            </div>

            <div className="flex-1 flex items-center justify-center ml-2">
                <DarkModeToggle
                    className="outline-none border-none"
                    onChange={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                        setIsDarkMode(!isDarkMode);
                    }}
                    checked={isDarkMode}
                    size={50}
                />
            </div>
        </div>
    );
};
export default LanguageNav;
