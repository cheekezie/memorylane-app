import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LogoImage, LogoImage2 } from "@/assets";
import Link from "next/link";
import DarkModeButton from "../elements/DarkModeButton";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ label: "Home", href: "#" },
		{ label: "Contact Us", href: "#" },
	];

	return (
		<>
			<header className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-graydark z-999 transition-all duration-300 border-b border-bodydark1 dark:border-bodydark2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16 sm:h-20">
						<div className="flex-shrink-0 flex items-center">
							<Image
								src={LogoImage2}
								alt="logo-image"
								priority
								width={200}
								height={200}
							/>
						</div>

						{/* Desktop */}
						<nav className="hidden md:flex items-center space-x-12">
							{navItems.map((item, index) => (
								<Link
									key={item.label}
									href={item.href}
									className={`text-sm font-medium transition-colors duration-200 ${
										index === 0
											? "text-secondary dark:text-secondary"
											: "text-graydark dark:text-bodydark1 hover:text-secondary dark:hover:text-secondary"
									}`}
								>
									{item.label}
								</Link>
							))}

							<DarkModeButton />
						</nav>

						{/* Mobile */}
						<div className="md:hidden flex items-center gap-2">
							<DarkModeButton />
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="p-2 text-graydark dark:text-bodydark1 hover:text-primary dark:hover:text-secondary transition-colors duration-200"
								aria-label="Toggle menu"
							>
								{isOpen ? <X size={24} /> : <Menu size={24} />}
							</button>
						</div>
					</div>

					{isOpen && (
						<nav className="md:hidden bg-white dark:bg-graydark border-t border-bodydark1 dark:border-bodydark2">
							<div className="px-4 py-6 space-y-6">
								{navItems.map((item) => (
									<a
										key={item.label}
										href={item.href}
										className="block text-sm font-medium text-graydark dark:text-bodydark1 hover:text-secondary dark:hover:text-secondary transition-colors duration-200"
										onClick={() => setIsOpen(false)}
									>
										{item.label}
									</a>
								))}
							</div>
						</nav>
					)}
				</div>
			</header>

			<div className="h-16 sm:h-20" />
		</>
	);
};

export default Header;
