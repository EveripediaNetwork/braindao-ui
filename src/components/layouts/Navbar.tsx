"use client";

import React from "react";
import { BraindaoLogoDark } from "../svgs/BraindaoLogoDark";
import { BraindaoLogoWhite } from "../svgs/BrainLogoWhite";
import NavBarButton from "./NavBarButton";
import { navLinks } from "@/data/Nav";
import { raleway } from "@/app/font";
import { RiCloseFill } from "react-icons/ri";
import dynamic from "next/dynamic";
import { CgSpinner } from "react-icons/cg";
import MobileThemeSwitcher from "./theme/MobileThemeSwitcher";
import { useTheme } from "next-themes";

const ThemeSwitcher = dynamic(
  () => import("@/components/layouts/theme/ThemeSwitcher"),
  {
    ssr: false,
    loading: () => <CgSpinner size={36} className="animate-spin" />,
  }
);

const Navbar = () => {
  const { theme } = useTheme();

  const isDarkTheme = theme === "dark";
  return (
    <div className="bg-transparent text-whiteAlpha-900">
      <div className="max-w-[1536px] mx-auto">
        <header className=" flex flex-col z-50 lg:-mx-7 lg:px-14 p-3">
          <div className="flex justify-between items-center w-full">
            <h1 className="flex gap-2 items-center text-lg font-medium">
              <a href="/">
                <BraindaoLogoDark />
              </a>
            </h1>
            <nav className="hidden lg:flex gap-8 xl:gap-20 text-sm lg:text-base">
              {navLinks.map((link) => (
                <a
                  target={link.target}
                  href={link.href}
                  key={link.href}
                  className=""
                >
                  {link.title}
                </a>
              ))}
            </nav>
            <div className="flex gap-2 items-center">
              <a
                href="https://iq.braindao.org"
                target="_blank"
                className={`hidden md:flex justify-center bg-brand-700 hover:bg-brand-700 md:w-[194px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300`}
              >
                Launch Dashboard
              </a>
              <ThemeSwitcher />
              <NavBarButton />
            </div>
          </div>
          <div
            id="mobile_nav_items"
            className="hidden fixed left-0 dark:bg-gray800 bg-[#F9FAFB] w-full top-0 h-screen sm:h-[80vh] z-10"
          >
            <ul className="flex flex-col divide-y-[1px] dark:text-whiteAlpha-800 text-gray600 w-full dark:divide-whiteAlpha-200">
              <div className="flex justify-between sm:px-3 py-2">
                <div className="px-2 py-2">
                  <a href="/">
                    {isDarkTheme ? <BraindaoLogoDark /> : <BraindaoLogoWhite />}
                  </a>
                </div>

                <button
                  className="text-whiteAlpha-900 px-5 py-2"
                  onClick={() => {
                    const mobileNav = document.getElementById(
                      "mobile_nav_items"
                    ) as HTMLDivElement;
                    mobileNav.classList.toggle("hidden");
                  }}
                >
                  <RiCloseFill
                    size={24}
                    className="dark:text-whiteAlpha-900 text-gray600 "
                  />
                </button>
              </div>
              <div className="flex flex-col text-sm sm:text-base px-5">
                {navLinks.map((link) => (
                  <li key={link.href} className="sm:px-3 py-4">
                    <a target={link.target} href={link.href}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </div>
              <MobileThemeSwitcher />
              <li className="pt-3 px-5 md:hidden">
                <a
                  href="https://iq.braindao.org"
                  target="_blank"
                  className={`flex flex-1 justify-center text-whiteAlpha-900 dark:bg-brand-800 bg-brand-500 hover:bg-brand-700 md:w-[184px] text-sm lg:text-base px-5 py-2 rounded-md transition-all ease-in-out duration-300 ${raleway.className}`}
                >
                  <span>Launch Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
