"use client";

import { LogoImage } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	const navLinks = [
		{ label: "About", href: "#" },
		{ label: "Gallery Ideas", href: "#" },
		{ label: "FAQ", href: "#" },
		{ label: "Contact", href: "#" },
		{ label: "Terms & Privacy", href: "#" },
	];

	return (
		<footer className="w-full bg-primary dark:bg-graydark">
			<div className="px-4 sm:px-6">
				<div className="max-w-7xl mx-auto py-12 sm:py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-white border-opacity-20 dark:border-bodydark2">
						<div>
							<div className="flex-shrink-0 flex items-center">
								<Image
									src={LogoImage}
									alt="logo-image"
									priority
									width={200}
									height={200}
									className="mb-4"
								/>
							</div>
							<p className="text-sm sm:text-base text-white text-opacity-80 dark:text-bodydark1 leading-relaxed">
								Clarity gives you the blocks and components you need to create a
								truly professional website.
							</p>
						</div>

						<div className="flex flex-wrap gap-6 sm:gap-8">
							{navLinks.map((link) => (
								<Link
									key={link.label}
									href={link.href}
									className="text-sm sm:text-base text-white text-opacity-80 dark:text-bodydark1 hover:text-white dark:hover:text-bodydark1 transition-colors duration-200 font-medium"
								>
									{link.label}
								</Link>
							))}
						</div>
					</div>

					<div className="text-center">
						<p className="text-xs sm:text-sm text-white text-opacity-70 dark:text-bodydark2">
							© Copyright {year}. All Rights Reserved by Memorylane
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
