"use client";

import { useEffect, useState } from "react";

export const useActiveSection = () => {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"iqai",
				"iq-wiki",
				"sophia",
				"aiden",
				"dashboard",
				"blog",
			];
			const scrollPosition = window.scrollY + 150;

			for (const sectionId of sections) {
				const element = document.getElementById(sectionId);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(sectionId);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return activeSection;
};
