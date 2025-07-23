import { TokenBrief } from "@/app/_components/token-brief";

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
		</div>
	);
};

export default Blog;
