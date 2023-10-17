'use client';

import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunFill } from 'react-icons/ri';

const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const isDarkTheme = theme === 'dark';

	const handleThemeToggle = () => {
		if (isDarkTheme) {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	};

	return (
		<button
			type='button'
			className='hidden lg:flex cursor-pointer w-10 h-full  justify-center px-1 py-2 items-center rounded-md border border-whiteAlpha-400 text-whiteAlpha900'
			onClick={handleThemeToggle}
			aria-label='Theme Switcher'
		>
			{isDarkTheme ? <RiMoonFill size={24} /> : <RiSunFill size={24} />}
		</button>
	);
};

export default ThemeSwitcher;
