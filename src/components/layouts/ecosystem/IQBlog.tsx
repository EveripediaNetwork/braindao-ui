import { TokenBrief } from "@/app/[locale]/_components/token-brief";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import BlogImage from "./images/blog/iq-blog.webp";

const Blog = async () => {
	const t = await getTranslations("ecosystem.blog");

	return (
		<div id="blog" className="bg-black text-muted-foreground">
			<div className="px-4 xl:container xl:mx-auto xl:px-4 pb-12 sm:py-8 xl:py-12">
				<TokenBrief
					title={t("title")}
					description={t("description")}
					action="https://blog.iqai.com/"
					buttonText={t("button")}
				/>

				<div className="w-full rounded-xl overflow-hidden mt-12 gap-4">
					<Image
						src={BlogImage}
						alt={t("title")}
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
