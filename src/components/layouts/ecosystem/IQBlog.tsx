"use client";

import { TokenBrief } from "@/app/_components/token-brief";

import Image from "next/image";
import BlogImage from "./images/blog/iq-blog.webp";

const Blog = () => {
	return (
		<div id="blog" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="IQ Blog"
					description="Check out our blog to stay updated on all the exciting developments from BrainDAO and the IQ Ecosystem!"
					action="https://blog.iqai.com/"
					buttonText="Visit blog"
				/>
			</div>

			{/* <div className="w-full overflow-hidden hidden lg:block">
				<ContainerScroll titleComponent={""}>
					<Image
						src={BlogImage}
						alt="IQ Blog"
						width={1200}
						height={675}
						className="w-full h-auto"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
					/>
				</ContainerScroll>
			</div> */}

			<div className="w-full">
				<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4">
					<div className="w-full rounded-xl overflow-hidden">
						<Image
							src={BlogImage}
							alt="IQ Blog"
							width={1200}
							height={675}
							className="w-full h-auto"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
