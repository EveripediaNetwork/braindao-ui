import { useTheme } from "next-themes";

const useThemeImage = (lightSrc: string, darkSrc: string) => {
	const { theme, resolvedTheme } = useTheme();
	const currentTheme = theme === "system" ? resolvedTheme : theme;
	if (currentTheme === "dark") {
		return darkSrc;
	}
	if (currentTheme === "light") {
		return lightSrc;
	}
};

export default useThemeImage;
