"use client";

import { TokenBrief } from "@/app/_components/token-brief";

import Image from "next/image";
import BlogImage from "./images/blog/iq-blog.webp";

const Blog = () => {
	return (
		<div id="blog" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-12">
				<TokenBrief
					title="IQ Blog"
					description="Check out our blog to stay updated on all the exciting developments from BrainDAO and the IQ Ecosystem!"
					action="https://blog.iqai.com/"
					buttonText="Visit Blog"
				/>

				<div className="w-full rounded-xl overflow-hidden mt-12 gap-4">
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
	);
};

export default Blog;
