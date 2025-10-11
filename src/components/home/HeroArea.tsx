"use client";

import { SwapImage1, SwapImage2, SwapImage3, SwapImage4 } from "@/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [SwapImage1, SwapImage2, SwapImage3, SwapImage4];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 1000);
		return () => clearInterval(interval);
	}, [images.length]);
	return (
		<section className="w-full pt-20 pb-12 sm:pt-28 sm:pb-16">
			<div className="px-4 sm:px-6">
				<div className="text-center mb-12 sm:mb-16">
					<h1 className="text-4xl sm:text-title-xl lg:text-title-xxl font-bold text-graydark dark:text-bodydark1 mb-4 sm:mb-6">
						Turn your photos into <span className="text-secondary">Frames</span>{" "}
						in Minutes
					</h1>

					<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
						Upload your favorite photos, choose a frame style, and see exactly
						how it will look on your wall before you buy.
					</p>

					<button className="group inline-flex items-center gap-2 px-8 py-3 sm:px-10 sm:py-4 bg-primary hover:bg-opacity-90 text-white font-semibold rounded-full transition-all duration-300 hover:gap-3 group">
						Frame your Picture
						<ArrowRight
							size={30}
							className="transition-transform group-hover:translate-x-1 bg-white p-2 text-black group-hover:bg-black group-hover:text-white rounded-full"
						/>
					</button>
				</div>

				<div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-6">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="w-full h-auto block"
						poster="/hero-image.png"
					>
						<source src="/video/vid-1.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>

					<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
				</div>
				<div className="">
					<div
						className="relative w-full max-w-5xl mt-10 mx-auto rounded-3xl overflow-hidden"
						style={{
							backgroundImage: `url('/gray-bg.png')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 p-8 sm:p-12 lg:p-16">
							<div className="w-full lg:w-1/2 text-left">
								<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-white mb-4 sm:mb-6">
									We have Frames that fit any Space
								</h2>
								<p className="text-base sm:text-lg text-graydark dark:text-bodydark1 leading-relaxed">
									From minimal black to warm wood tones find a style that
									matches your home.
								</p>
							</div>

							<div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
								<div className="relative w-56 h-64 sm:w-72 sm:h-80 overflow-hidden rounded-xl border-4 border-[whitesmoke] shadow-lg">
									{images.map((img, index) => (
										<Image
											key={index}
											src={img}
											alt={`alt-images ${index + 1}`}
											fill
											className={`absolute top-0 left-0 object-cover transition-opacity duration-700 ${
												index === currentImage ? "opacity-100" : "opacity-0"
											}`}
											sizes="(max-width: 640px) 100vw, 50vw"
											priority={index === 0}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
