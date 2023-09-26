"use client";

import { useTheme } from "next-themes";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const isDarkTheme = theme === "dark";

  const handleThemeToggle = () => {
    if (isDarkTheme) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      type="button"
      className="hidden xl:flex cursor-pointer w-9 h-9  justify-center p-1 items-center rounded-md border border-whiteAlpha-400 text-whiteAlpha900"
      onClick={handleThemeToggle}
      aria-label="Theme Switcher"
    >
      {isDarkTheme ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
    </button>
  );
};

export default ThemeSwitcher;
