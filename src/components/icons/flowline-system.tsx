import { cn } from "@/lib/utils";
import React from "react";

export default function FlowlineSystem({ className }: { className?: string }) {
	return (
		// biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
		<svg
			width="392"
			height="208"
			viewBox="0 0 392 208"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn(className)}
		>
			<path
				id="mainPath"
				d="M338.567 96C352.352 96 363.567 84.785 363.567 71V25C363.567 12.318 373.884 2 386.567 2H392V0H386.567C372.782 0 361.567 11.215 361.567 25V71C361.567 83.682 351.25 94 338.567 94H228.879L190.043 102.226L144.089 94H55.164C42.482 94 32.164 83.682 32.164 71V25C32.164 11.215 20.949 0 7.164 0H0V2H7.164C19.846 2 30.164 12.318 30.164 25V71C30.164 84.785 41.379 96 55.164 96H143.911L184.844 103.327L143.895 112H55.164C41.379 112 30.164 123.215 30.164 137V183C30.164 195.683 19.846 206 7.164 206H0V208H7.164C20.949 208 32.164 196.785 32.164 183V137C32.164 124.317 42.482 114 55.164 114H144.105L190.076 104.263L244.387 113.984L244.474 114H338.567C351.25 114 361.567 124.317 361.567 137V183C361.567 196.785 372.782 208 386.567 208H392V206H386.567C373.884 206 363.567 195.683 363.567 183V137C361.567 123.215 352.352 112 338.567 112H244.651L195.275 103.162L229.088 96H338.567Z"
				fill="url(#paint0_linear_694_724)"
			/>

			<circle id="dot1" r="4" fill="url(#dotGradient)">
				<animateMotion dur="12s" repeatCount="indefinite" calcMode="linear">
					<mpath xlinkHref="#mainPath" />
				</animateMotion>
			</circle>

			<circle id="dot2" r="4" fill="url(#dotGradient)">
				<animateMotion
					begin="3s"
					dur="12s"
					repeatCount="indefinite"
					calcMode="linear"
				>
					<mpath xlinkHref="#mainPath" />
				</animateMotion>
			</circle>

			<circle id="dot3" r="4" fill="url(#dotGradient)">
				<animateMotion
					begin="6s"
					dur="12s"
					repeatCount="indefinite"
					calcMode="linear"
				>
					<mpath xlinkHref="#mainPath" />
				</animateMotion>
			</circle>

			<circle id="dot4" r="4" fill="url(#dotGradient)">
				<animateMotion
					begin="9s"
					dur="12s"
					repeatCount="indefinite"
					calcMode="linear"
				>
					<mpath xlinkHref="#mainPath" />
				</animateMotion>
			</circle>

			<defs>
				<linearGradient
					id="paint0_linear_694_724"
					x1="195.994"
					y1="294.283"
					x2="196.547"
					y2="-90.864"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#EE5622" />
					<stop offset="0.25" stopColor="#AA446C" />
					<stop offset="0.5" stopColor="#6531B7" />
					<stop offset="0.75" stopColor="#AA446C" />
					<stop offset="1" stopColor="#EE5622" />
				</linearGradient>

				<linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#EE5622" />
					<stop offset="25%" stopColor="#AA446C" />
					<stop offset="50%" stopColor="#6531B7" />
					<stop offset="75%" stopColor="#AA446C" />
					<stop offset="100%" stopColor="#EE5622" />
				</linearGradient>
			</defs>
		</svg>
	);
}
