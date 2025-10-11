"use client";

import { testimonials } from "@/data/Testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Testimonials() {
	const [isPaused, setIsPaused] = useState(false);
	const [displayTestimonials, setDisplayTestimonials] = useState(testimonials);

	useEffect(() => {
		setDisplayTestimonials([...testimonials, ...testimonials]);
	}, []);

	return (
		<section className="w-full py-16 sm:py-20 overflow-hidden">
			<div className="px-4 sm:px-6">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-bodydark1 mb-3 sm:mb-4">
						Hear form our Customers
					</h2>
					<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark">
						In doubt, not to worry, listen to what our amazing customers say
						about us.
					</p>
				</div>

				<div
					className="flex gap-6 sm:gap-8 overflow-hidden"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
				>
					<style>
						{`
							@keyframes scroll-left {
								0% {
									transform: translateX(0);
								}
								100% {
									transform: translateX(-50%);
								}
							}
							.carousel-track {
								animation: scroll-left 40s linear ${isPaused ? "paused" : "running"};
								display: flex;
								gap: 1.5rem;
							}
							@media (min-width: 640px) {
								.carousel-track {
									gap: 2rem;
								}
							}
						`}
					</style>
					<div className="carousel-track">
						{displayTestimonials.map((testimonial, index) => (
							<div key={index} className="flex-shrink-0 w-72 sm:w-96 ">
								<div className="bg-white dark:bg-graydark rounded-2xl overflow-hidden shadow-card hover:shadow-6 transition-shadow duration-300">
									<div className="relative w-full h-48 sm:h-56 bg-gray-200">
										<Image
											src={testimonial.image}
											alt={testimonial.author}
											fill
											className="object-cover"
										/>
									</div>

									<div className="p-6 sm:p-8">
										<p className="text-sm sm:text-base text-bodydark2 dark:text-bodydark mb-4 leading-relaxed">
											{testimonial.text}
										</p>
										<p className="text-base sm:text-lg font-semibold text-graydark dark:text-bodydark1">
											—{testimonial.author}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
