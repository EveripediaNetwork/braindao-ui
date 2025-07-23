import { satoshi } from "@/app/font";
import React from "react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import InViewAnimateBottom from "../transitions/InViewAnimateBottom";
import Navbar from "./Navbar";

const Hero = () => {
	return (
		<div className="relative bg-black overflow-hidden pb-8">
			<div className="absolute top-0 left-0 right-0 h-80 z-10">
				<img
					src="/images/gradient-blur-bg.png"
					alt=""
					className="w-full h-full object-cover opacity-100"
				/>
			</div>

			<div className="relative z-20">
				<div className="max-w-[1536px] mx-auto">
					<Navbar />
					<div className="flex flex-col items-center w-full justify-center relative overflow-y-hidden h-[calc(40vh-65px)] md:h-[calc(60vh-65px)] lg:h-[calc(60vh-65px)]">
						<div className="flex text-center md:text-left items-center flex-col justify-start mx-auto gap-1 sm:gap-5 w-full px-4 sm:px-0 max-w-6xl">
							<InViewAnimateBottom>
								<h1 className="text-2xl font-medium text-white sm:text-4xl md:text-5xl animate-fade-in xl:text-[60px] 2xl:text-[70px] !leading-tight text-center">
									<span className={satoshi.className}>
										Building A More Intelligent Future Through the{" "}
									</span>
									<span className={`${satoshi.className} italic text-primary`}>
										IQ Token.
									</span>
								</h1>
								<div className="absolute bottom-4 left-0 right-0 h-1/2 opacity-80">
									<img
										src="/images/mesh.png"
										alt=""
										className="w-full object-cover scale-20"
									/>
								</div>
							</InViewAnimateBottom>
							<InViewAnimateBottom>
								<p className="text-sm sm:text-lg max-w-[513px] lg:max-w-2xl text-center mx-auto lg:text-xl text-white">
									Join our mission to expand the scope of human knowledge with
									BrainDAO, the governing DAO powering the IQ ecosystem.
								</p>
							</InViewAnimateBottom>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
