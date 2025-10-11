"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState(0);

	const faqs = [
		{
			question: "What is Memorylane?",
			answer:
				"Memorylane is an AI-empowered SaaS platform that makes it easy to transform your photos into custom framed artwork.",
		},
		{
			question: "How long does delivery take?",
			answer:
				"We typically process and ship orders within 3-5 business days. Standard shipping takes 5-7 business days, while express shipping options are available for faster delivery.",
		},
		{
			question: "Can I return or exchange my frame?",
			answer:
				"Yes, we offer a 30-day satisfaction guarantee. If you're not happy with your frame, you can return it for a full refund or exchange it for a different style at no additional cost.",
		},
		{
			question: "What file formats do you accept for photos?",
			answer:
				"We accept JPG, PNG, and GIF formats for your photos. We recommend uploading high-resolution images (at least 2000x2000 pixels) for the best quality frames.",
		},
	];

	const toggleFAQ = (index: any) => {
		setOpenIndex(openIndex === index ? -1 : index);
	};

	return (
		<section className="w-full py-16 sm:py-20">
			<div className="px-4 sm:px-6">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-bodydark1 mb-3 sm:mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark">
						Here are the most common questions.
					</p>
				</div>

				<div className="max-w-3xl mx-auto space-y-4 sm:space-y-5">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="bg-white dark:bg-graydark border border-bodydark1 dark:border-bodydark2 rounded-xl overflow-hidden transition-all duration-300"
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex items-center justify-between gap-4 p-6 sm:p-8 hover:bg-bodydark1 dark:hover:bg-bodydark2 transition-colors duration-300"
							>
								<h3 className="text-lg sm:text-title-xsm font-semibold text-graydark dark:text-bodydark1 text-left">
									{faq.question}
								</h3>
								<div
									className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-secondary text-white transition-transform duration-300 ${
										openIndex === index ? "rotate-180" : ""
									}`}
								>
									<ChevronDown size={24} />
								</div>
							</button>

							<div
								className={`overflow-hidden transition-all duration-300 ${
									openIndex === index ? "max-h-96" : "max-h-0"
								}`}
							>
								<div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-bodydark1 dark:border-bodydark2 bg-bodydark1 dark:bg-bodydark2 bg-opacity-30 dark:bg-opacity-20">
									<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark leading-relaxed">
										{faq.answer}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
