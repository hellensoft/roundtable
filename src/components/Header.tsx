"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import Link from "next/link";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "About Us", href: "/about" },
	{ name: "Membership", href: "/membership" },
	{ name: "Events", href: "/events" },
	{ name: "Publications", href: "/publications" },
	{ name: "Contact Us", href: "/contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-blueDark">
			<SectionWrapper>
				<nav
					className="flex items-center justify-between py-6"
					aria-label="Global"
				>
					<Link href="/" className="flex lg:flex-1">
						<span className="sr-only">Your Company</span>
						<div className="">
							<Image
								className="h-12 w-auto"
								src="/images/ceo-roundtable-logo.svg"
								alt="company logo"
								width={200}
								height={200}
							/>
						</div>
					</Link>
					<div className="flex lg:hidden">
						<button
							type="button"
							className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(true)}
						>
							<span className="sr-only">Open main menu</span>
							<HiBars3 className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6 text-white"
							>
								{item.name}
							</Link>
						))}
					</div>
				</nav>
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
						<div className="flex items-center justify-between">
							<Link href="/" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<Image
									className="h-8 w-auto"
									src="/images/ceo-roundtable-logo.svg"
									alt=""
									width={200}
									height={200}
								/>
							</Link>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-400"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<HiXMark
									className="h-6 w-6"
									aria-hidden="true"
								/>
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/25">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<Link
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</SectionWrapper>
		</header>
	);
}
