import { satoshi } from "@/app/font";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import InViewAnimateBottom from "../transitions/InViewAnimateBottom";
import Navbar from "./Navbar";

const Hero = () => {
	return (
		<div className="relative overflow-hidden pb-8">
			<div className="absolute top-0 left-0 right-0 h-80 z-10">
				<img
					src="/images/gradient-blur-bg.png"
					alt=""
					className="w-full h-full object-cover opacity-100"
				/>
			</div>

			<div className="relative">
				<div className="max-w-[1536px] mx-auto">
					<Navbar />
					<div className="flex flex-col items-center w-full justify-center relative overflow-y-hidden min-h-[calc(40vh-65px)] md:min-h-[calc(60vh-65px)] lg:min-h-[calc(60vh-65px)] pt-32 md:pt-48 lg:pt-56 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
						<div className="flex text-center md:text-left items-center flex-col justify-start mx-auto gap-1 sm:gap-5 w-full px-4 sm:px-0 max-w-6xl">
							<h1
								className={cn(
									satoshi.className,
									"text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[60px] 2xl:text-[70px] font-medium text-white animate-fade-in !leading-tight text-center",
								)}
							>
								<span className="block">Building A More</span>
								<span className="block">Intelligent Future Through</span>
								<span className="block">
									the <span className="italic text-primary">IQ Token.</span>
								</span>
							</h1>
							<div className="absolute bottom-4 left-0 right-0 h-1/2 opacity-80">
								<Image
									src="/images/mesh.png"
									alt=""
									width={1200}
									height={1200}
									className="w-full object-cover scale-20 pt-12"
								/>
							</div>
							<p className="text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl text-white pt-0">
								Join our mission to expand the scope of human knowledge with
								BrainDAO, the governing DAO powering the IQ ecosystem.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
