"use client";
import { cn } from "@/lib/utils";
import Image, { type StaticImageData } from "next/image";
import type React from "react";

interface DetailCardProps {
	title?: string;
	image: StaticImageData;
	alt: string;
	className?: string;
	imageClassName?: string;
	width?: string | number;
	containerClassName?: string;
	backgroundImage?: string;
	imageContainerPadding?: string;
	imageStyle?: React.CSSProperties;
}

const DetailCard: React.FC<DetailCardProps> = ({
	title,
	image,
	alt,
	className,
	imageClassName,
	containerClassName,
	backgroundImage = "url(/images/background.svg)",
	imageContainerPadding = "",
	imageStyle = {},
}) => {
	return (
		<div
			className={cn(
				"w-full flex flex-col justify-between h-full border border-neutral-700 rounded-xl overflow-hidden",
				className,
			)}
			style={{
				backgroundImage,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{title && (
				<div className="px-4 pt-4 pb-2 flex-shrink-0">
					<p className="text-foreground text-xs sm:text-sm md:text-sm font-medium w-full">
						{title}
					</p>
				</div>
			)}
			<div
				className={cn(
					"flex-1 flex items-center justify-center w-full min-h-0 p-0",
					containerClassName,
				)}
			>
				<div
					className={cn(
						"relative w-full h-full flex items-center justify-center",
						imageContainerPadding,
					)}
				>
					<Image
						src={image}
						alt={alt}
						className={cn("w-full h-full object-contain", imageClassName)}
						style={{
							maxWidth: "100%",
							maxHeight: "100%",
							...imageStyle,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default DetailCard;
