import InViewAnimateBottom from "@/components/transitions/InViewAnimateBottom";
import { braindaoTeam } from "@/data/team";
import Image, { type ImageProps } from "next/image";

type TTeam = {
	src?: ImageProps["src"];
	name?: string;
	role?: string;
	twitterLink?: string;
	linkedinLink?: string;
	wikiLink?: string;
};
const TeamCard = ({
	src,
	name,
	role,
	twitterLink,
	linkedinLink,
	wikiLink,
}: TTeam) => {
	return (
		<InViewAnimateBottom className="w-full">
			<div className="flex flex-col">
				<div className="relative w-full aspect-square rounded-tl-xl rounded-tr-xl mb-4 overflow-hidden bg-black shadow-custom">
					<Image
						src={src || ""}
						alt={`${name}'s profile picture`}
						fill
						sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 20vw"
						className="object-cover object-top rounded-tl-xl rounded-tr-xl"
					/>
				</div>

				<div className="flex flex-col items-start font-montserrat">
					<p
						className="text-primary text-xs font-medium mb-2 font-satoshi">
						{role || ""}
					</p>
					<h4 className="text-white text-sm font-semibold mb-3">
						{name || ""}
					</h4>
					<div className="flex gap-3 items-center bg-neutral-900 border border-neutral-700 rounded-2xl py-2 px-3.5">
						{twitterLink && (
							<a
								href={twitterLink}
								target="_blank"
								className="w-5 h-5 bg-no-repeat bg-contain bg-center bg-twitter opacity-70 hover:opacity-100 transition-opacity"
								rel="noreferrer"
								aria-label={`${name}'s Twitter profile`}
							>
								<span className="sr-only">Twitter</span>
							</a>
						)}
						{wikiLink && (
							<a
								href={wikiLink}
								target="_blank"
								className="w-7 h-5 bg-no-repeat bg-contain bg-center bg-everipedia opacity-70 hover:opacity-100 transition-opacity"
								rel="noreferrer"
								aria-label={`${name}'s Wiki page`}
							>
								<span className="sr-only">Wiki</span>
							</a>
						)}
						{linkedinLink && (
							<a
								href={linkedinLink}
								target="_blank"
								className="w-5 h-5 bg-no-repeat bg-contain bg-center bg-linkedln opacity-70 hover:opacity-100 transition-opacity"
								rel="noreferrer"
								aria-label={`${name}'s LinkedIn profile`}
							>
								<span className="sr-only">LinkedIn</span>
							</a>
						)}
					</div>
				</div>
			</div>
		</InViewAnimateBottom>
	);
};
const BraindaoTeam = () => {
	return (
		<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 py-12 sm:py-20 2xl:py-24">
			<div className="flex items-start flex-col lg:flex-row w-full justify-between">
				<div className="xl:w-[400px] xl:flex-shrink-0">
					<InViewAnimateBottom>
						<h3 className="font-satoshi font-semibold text-2xl sm:text-3xl xl:text-4xl text-primary">
							Meet the Team
						</h3>
					</InViewAnimateBottom>
				</div>
				<div className="mt-2 xl:mt-0">
					<InViewAnimateBottom>
						<p className="flex-1 lg:text-lg text-muted-foreground xl:max-w-[650px] 2xl:max-w-[700px]">
							BrainDAO is made up of a diverse team united by our mission,
							hailing from various corners of the globe.
						</p>
					</InViewAnimateBottom>
				</div>
			</div>
			<div className="relative grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 md:mt-14 border-t border-b border-neutral-700">
				{braindaoTeam.map((team) => (
					<div
						key={team.name}
						className="py-4 px-2 sm:py-6 sm:px-6 lg:px-4 lg:py-4 border-neutral-700 border-b sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0"
					>
						<TeamCard
							src={team.src}
							name={team.name}
							role={team.role}
							linkedinLink={team.linkedinLink}
							twitterLink={team.twitterLink}
							wikiLink={team.wikiLink}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default BraindaoTeam;
