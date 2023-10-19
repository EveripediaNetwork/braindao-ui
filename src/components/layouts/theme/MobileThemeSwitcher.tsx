'use client'

import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

const MobileThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const isDarkTheme = theme === 'dark'

  const handleThemeToggle = () => {
    if (isDarkTheme) {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <li className="py-4 px-5 lg:hidden">
      <div className="flex sm:px-3 justify-between items-center">
        <div className="flex items-center gap-2">
          <RiMoonFill size={24} />
          <span className="flex items-center gap-2">Dark Mode</span>
        </div>
        <span
          onClick={handleThemeToggle}
          className="mr-0 w-10 h-5 bg-blue-500 rounded-full flex items-center px-1 dark:bg-gray-300"
        >
          <span className="w-3 h-3 rounded-full bg-white block transition-all duration-300 ease-in-out translate-x-5 dark:translate-x-0"></span>
        </span>
      </div>
    </li>
  )
}

export default MobileThemeSwitcher
