import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="mr-10">
            <button
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-2 rounded-md flex items-center"
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? (
                    <FaSun className="mr-2" />
                ) : (
                    <FaMoon className="mr-2" />
                )}
                <span>Toggle Theme</span>
            </button>
        </div>
    );
}

export default ThemeToggle;
