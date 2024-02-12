import PageIntro from "@/components/PageIntro";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeader from "@/components/SectionHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About || Tanzanite CEO Roundtable",
	description: "Get to know us",
	icons: "/images/ceo-logo.png",
};

const AboutPage = () => {
	return (
		<div>
			<PageIntro title="About" description="About us" />
			<div>
				<SectionWrapper>
					<div className="py-20 grid grid-cols-2 gap-12">
						<div className="">
							<SectionHeader
								title="Provides a forum where CEOs interact"
								description="The Tanzanite C.E.O Roundtable"
							/>
							<div className="grid grid-cols-2 gap-8">
								<div>
									<h1>200+</h1>
									<h3>Happy Members</h3>
									<p>
										Members can share their knowledge and
										experiences with each other in a
										confidential environment.
									</p>
								</div>
								<div>
									<h1>20+</h1>
									<h3>Associated companies</h3>
									<p>
										We help our clients increase profits by
										increasing their visibility online.
									</p>
								</div>
							</div>
						</div>
						<div></div>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};

export default AboutPage;
