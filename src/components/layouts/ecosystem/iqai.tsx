import { TokenBrief } from "@/app/_components/token-brief";

const IQAI = () => {
	return (
		<div id="iqai" className="bg-black text-muted-foreground">
			<div className="px-4 md:px-10 xl:container xl:mx-auto xl:px-4 pb-[48px] sm:pb-[80px] xl:pb-24">
				<TokenBrief
					title="IQ AI"
					description="IQ AI is building the foundation for mass blockchain adoption through the Agent Tokenization Platform (ATP). By enabling the creation of tokenized, autonomous on-chain agents, ATP is redefining decentralized ecosystems and unlocking new opportunities for collaboration, growth, and innovation.."
					action="https://sophia.braindao.org"
					buttonText="Explore IQ AI"
				/>
			</div>
		</div>
	);
};

export default IQAI;
