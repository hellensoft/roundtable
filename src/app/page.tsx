import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tanzanite CEO Roundtable",
	description: "Tanzanite CEO Roundtable",
    icons: "/images/ceo-logo.png",
};

export default function Home() {
	return (
		<div>
			<Hero />
		</div>
	);
}
