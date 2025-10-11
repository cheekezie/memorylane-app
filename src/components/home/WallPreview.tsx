"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { ArrowImage, Sitting1, Sitting2, Sitting3 } from "@/assets";
import Button from "../elements/Button";

export default function WallPreview() {
	const [activeTab, setActiveTab] = useState("white-wall");

	const tabs = [
		{
			id: "white-wall",
			label: "White Wall",
			image: Sitting1,
		},
		{
			id: "grey-wall",
			label: "Grey Wall",
			image: Sitting2,
		},
		{
			id: "living-room",
			label: "Living room Wall",
			image: Sitting3,
		},
	];

	return (
		<section className="w-full py-16 sm:py-20">
			<div className="px-4 sm:px-6">
				<div className="text-center mb-10 sm:mb-12">
					<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-bodydark1 mb-3 sm:mb-4">
						How it Looks on your wall
					</h2>
					<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark">
						Choose a background and preview how your frames will look in your
						home.
					</p>
				</div>

				<div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 mb-8 sm:mb-12">
					<div className="hidden sm:flex items-center gap-2 text-secondary">
						{/* <ChevronLeft size={28} className="rotate-180" /> */}
						<Image
							src={ArrowImage}
							alt="arrow"
							className="w-16 h-16 rotate-270"
						/>
						<span className="text-sm text-bodydark2">Click here</span>
					</div>

					<div className="flex flex-wrap gap-3 sm:gap-4">
						{tabs.map((tab) => (
							<Button
								key={tab.id}
								label={tab.label}
								onClick={() => setActiveTab(tab.id)}
								className={`px-6 sm:px-8 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 ${
									activeTab === tab.id
										? "bg-primary text-white"
										: "bg-bodydark1 dark:bg-bodydark2 text-graydark dark:text-bodydark1 hover:bg-bodydark2 dark:hover:bg-bodydark"
								}`}
							/>
						))}
					</div>
				</div>

				<div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl border-4 border-graydark dark:border-bodydark1 shadow-6">
					{tabs.map((tab) => (
						<div
							key={tab.id}
							className={`transition-opacity duration-500 ${
								activeTab === tab.id ? "opacity-100" : "opacity-0 absolute"
							}`}
						>
							<div className="relative w-full aspect-video bg-gray-200">
								<Image
									src={tab.image}
									alt={tab.label}
									fill
									className="object-cover"
									priority={tab.id === "living-room"}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
