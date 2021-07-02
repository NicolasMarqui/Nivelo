import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Toggle: React.FC = ({}) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <div className="p-3 shadow-sm bg-gray-100 dark:bg-darkPrimaryBg rounded-lg flex items-center justify-center w-12 h-12">
            <DarkModeSwitch
                moonColor="#222"
                sunColor="#fff"
                checked={theme && theme === "light"}
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                size={50}
            />
        </div>
    );
};
export default Toggle;
