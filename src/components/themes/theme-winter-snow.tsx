"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Snowflake } from "./snowflake";

interface SnowflakeData {
	id: number;
	x: number;
	size: number;
	duration: number;
	delay: number;
	variant: number;
	swayAmplitude: number;
}

const CONFIG = {
	SNOWFLAKE_COUNT: 25,
	SIZE_RANGE: { min: 10, max: 25 },
	DURATION_RANGE: { min: 5, max: 8 },
	SWAY_AMPLITUDE: 50,
	DELAY_MAX: 5,
};

export default function ThemeWinterSnow() {
	const [snowflakes, setSnowflakes] = useState<SnowflakeData[]>([]);

	useEffect(() => {
		// Function to generate x position biased towards edges
		const getEdgeBiasedX = (): number => {
			const rand = Math.random();
			// 80% chance to be on edges (left or right 25% of screen)
			// 20% chance to be in center (middle 50% of screen)
			if (rand < 0.4) {
				// Left edge: 0-25%
				return Math.random() * 25;
			}
			if (rand < 0.8) {
				// Right edge: 75-100%
				return Math.random() * 25 + 75;
			}
			// Center: 25-75% (very sparse)
			return Math.random() * 50 + 25;
		};

		const flakes: SnowflakeData[] = Array.from(
			{ length: CONFIG.SNOWFLAKE_COUNT },
			(_, i) => ({
				id: i,
				x: getEdgeBiasedX(),
				size:
					Math.random() * (CONFIG.SIZE_RANGE.max - CONFIG.SIZE_RANGE.min) +
					CONFIG.SIZE_RANGE.min,
				duration:
					Math.random() *
						(CONFIG.DURATION_RANGE.max - CONFIG.DURATION_RANGE.min) +
					CONFIG.DURATION_RANGE.min,
				delay: Math.random() * CONFIG.DELAY_MAX,
				variant: Math.floor(Math.random() * 5) + 1,
				// True randomization: generate random sway amplitude for each flake
				swayAmplitude: (Math.random() - 0.5) * CONFIG.SWAY_AMPLITUDE,
			}),
		);
		setSnowflakes(flakes);
	}, []);

	return (
		<div
			className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
			style={{ mixBlendMode: "screen" }}
		>
			{/* Snowflakes */}
			{snowflakes.map((flake) => (
				<motion.div
					key={flake.id}
					className="absolute"
					style={{
						left: `${flake.x}%`,
						top: "-1vh",
					}}
					animate={{
						y: ["-1vh", "100vh"],
						x: [0, flake.swayAmplitude, 0],
						rotate: [0, 360],
					}}
					transition={{
						duration: flake.duration,
						delay: flake.delay,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
				>
					<Snowflake size={flake.size} variant={flake.variant} />
				</motion.div>
			))}
		</div>
	);
}
