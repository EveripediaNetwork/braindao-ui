'use client'
import React from "react";
import { HamburgerIcon } from "../icons/HamburgerIcon";

const NavBarButton = () => {
  return (
    <button
      className="fill-white md:hidden"
      onClick={() => {
        const mobileNav = document.getElementById(
          "mobile_nav_items"
        ) as HTMLDivElement;
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("block");
      }}
    >
      <HamburgerIcon />
    </button>
  );
};

export default NavBarButton;
