import PageIntro from "@/components/PageIntro";
import SectionWrapper from "@/components/SectionWrapper";
import { Metadata } from "next";
import Link from "next/link";
import {
	IoMailOutline,
	IoMapOutline,
	IoPhonePortraitOutline,
} from "react-icons/io5";

const contactDetails = [
	{
		title: "Our Location",
		description: "Address Building 2nd Floor, Masaki, Dar es Salaam",
		icon: <IoMapOutline />,
		link: "https://www.google.com/maps/place/Bains+Ave,+Dar+es+Salaam/@-6.744497,39.2797,17z/data=!4m6!3m5!1s0x185c4d098b11cfd1:0xa38b89e66226abc4!8m2!3d-6.7444973!4d39.2797001!16s%2Fg%2F11ftsxtqpy?hl=en&entry=ttu",
	},
	{
		title: "Give us a call",
		description: "+255 717 109 362",
		icon: <IoPhonePortraitOutline />,
		link: "tel:+255717109362",
	},
	{
		title: "Our Location",
		description: "info@tanzaniteceoroundtable.com",
		icon: <IoMailOutline />,
		link: "mailto:info@tanzaniteceoroundtable.com",
	},
];

export const metadata: Metadata = {
	title: "Contact || Tanzanite CEO Roundtable",
	description: "Get to know us",
	icons: "/images/ceo-logo.png",
};

const Contact = () => {
	return (
		<div>
			<PageIntro title="Contact" description="Get to know us" />

			<SectionWrapper>
				<div className="py-28 grid gap-20">
					<div>
						<div className="grid grid-cols-3 gap-10">
							{contactDetails.map((detail, index) => (
								<div
									key={index}
									className="flex items-startƒ space-x-4 shadow p-6 rounded-lg bg-white"
								>
									<div className="text-4xl text-blueLight">
										{detail.icon}
									</div>
									<div>
										<h3 className="text-xl mb-2 font-medium text-blueDark">
											{detail.title}
										</h3>
										<Link
											href={detail.link}
											target="_blank"
											className="text-gray-500 hover:text-blueLight hover:undeline"
										>
											{detail.description}
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</SectionWrapper>

			<div className="w-screen aspect-[16/7]">
				<iframe
					className="w-full h-full"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2077430227!2d39.27750605051347!3d-6.744497295100548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4d098b11cfd1%3A0xa38b89e66226abc4!2sBains%20Ave%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1664014340535!5m2!1sen!2stz"
					aria-hidden="false"
				></iframe>
			</div>
		</div>
	);
};

export default Contact;
