import Image from "next/image";
import type { IconProps } from ".";

const AidenIcon = (props: IconProps) => (
	<div
		className={props.className}
		style={{ width: props.size || 16, height: props.size || 16 }}
	>
		<Image
			src="/svgs/aiden.svg"
			alt="Aiden"
			width={props.size || 16}
			height={props.size || 16}
			priority
		/>
	</div>
);

export default AidenIcon;
