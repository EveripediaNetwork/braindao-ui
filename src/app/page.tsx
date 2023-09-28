import BraindaoTeam from '@/components/layouts/braindao-team';
import Ecosystem from '@/components/layouts/ecosystem';
import Hero from '@/components/layouts/Hero';
import Iqtoken from '@/components/layouts/Iqtoken';

export default function Home() {
	return (
		<>
			<Hero />
			<Iqtoken />
			<Ecosystem />
			<BraindaoTeam />
		</>
	);
}
