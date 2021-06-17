import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useTheme } from "next-themes";

const Toggle: React.FC = ({}) => {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

    return (
        <DarkModeToggle
            className="outline-none border-0"
            onChange={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsDarkMode(!isDarkMode);
            }}
            checked={isDarkMode}
            size={50}
        />
    );
};
export default Toggle;
