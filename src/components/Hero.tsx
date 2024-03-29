"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const heroData = [
	{
		title: "Data to enrich your online business",
		description:
			"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
		image: "",
	},
];

const Hero = () => {
	return (
		<div>
			<Swiper
				effect={"fade"}
				navigation={true}
				pagination={{
					clickable: true,
				}}
				modules={[EffectFade, Navigation, Pagination]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="bg-gray-900">
						<div className="relative isolate overflow-hidden">
							<Image
								src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
								alt=""
								fill
								className="absolute inset-0 -z-10 h-full w-full object-cover"
							/>
							<div
								className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
								aria-hidden="true"
							>
								<div
									className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blueLight to-blueDark opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
									style={{
										clipPath:
											"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
									}}
								/>
							</div>
							<div className="mx-auto max-w-2xl py-36 sm:py-52 lg:py-60">
								<div className="text-center">
									<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
										Data to enrich your online business
									</h1>
									<p className="mt-6 text-lg leading-8 text-gray-300">
										Anim aute id magna aliqua ad ad non
										deserunt sunt. Qui irure qui lorem
										cupidatat commodo. Elit sunt amet fugiat
										veniam occaecat fugiat aliqua.
									</p>
								</div>
							</div>
							<div
								className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
								aria-hidden="true"
							>
								<div
									className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
									style={{
										clipPath:
											"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
									}}
								/>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Hero;

{
	/* <div className="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="#"
								className="rounded-md bg-blueLight px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blueDark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blueDark"
							>
								Become a Member
							</a>
						</div> */
}
