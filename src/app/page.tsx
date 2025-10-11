import FAQ from "@/components/home/Faq";
import Hero from "@/components/home/HeroArea";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import WallPreview from "@/components/home/WallPreview";

export default function Home() {
	return (
		<main className="max-w-7xl mx-auto">
			<Hero />
			<HowItWorks />
			<WallPreview />
			<Testimonials />
			<FAQ />
		</main>
	);
}
