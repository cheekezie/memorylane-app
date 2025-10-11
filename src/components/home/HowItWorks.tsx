export default function HowItWorks() {
	const steps = [
		{
			number: 1,
			title: "Upload Your Photo",
			description:
				"Choose your favorite picture straight from your phone or computer.",
		},
		{
			number: 2,
			title: "Customize to your Taste",
			description:
				"Select from clean frames See your wall art in real rooms before you order.",
		},
		{
			number: 3,
			title: "Get it delivered to you.",
			description:
				"Add to cart, checkout and we'll deliver it you you ready to hang.",
		},
	];

	return (
		<section className="w-full py-16 sm:py-20">
			<div className="px-4 sm:px-6">
				<div className="text-center mb-12 sm:mb-16">
					<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-bodydark1 mb-3 sm:mb-4">
						How it Works
					</h2>
					<p className="text-base sm:text-lg text-bodydark2 dark:text-bodydark">
						From upload to your wall in just four simple steps
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
					{steps.map((step) => (
						<div
							key={step.number}
							className="flex flex-col items-center p-6 sm:p-8 border border-bodydark1 dark:border-bodydark2 rounded-2xl bg-white dark:bg-graydark hover:shadow-6 transition-shadow duration-300"
						>
							<div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary text-white font-bold text-2xl sm:text-3xl mb-6 sm:mb-8">
								{step.number}
							</div>

							<h3 className="text-xl sm:text-title-sm font-bold text-graydark dark:text-bodydark1 mb-3 sm:mb-4 text-center">
								{step.title}
							</h3>

							<p className="text-sm sm:text-base text-bodydark2 dark:text-bodydark text-center leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
			{/* second segment */}
			<div className="relative max-w-5xl mx-auto w-full mt-16 sm:mt-20 rounded-3xl overflow-hidden">
				<div
					className="absolute inset-0 w-full h-full"
					style={{
						backgroundImage: `url('/pink-bg.png')`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
				/>

				<div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 p-8 sm:p-12 lg:p-16 min-h-[400px] sm:min-h-[480px] lg:min-h-[520px]">
					<div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-6">
						<video
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full object-cover block"
							poster="/vid-image.png"
						>
							<source src="/video/vid-2.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>

					<div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
						<h2 className="text-3xl sm:text-title-lg lg:text-title-xl font-bold text-graydark dark:text-white mb-4 sm:mb-6">
							Hanging your frame made very easy
						</h2>
						<p className="text-base sm:text-lg text-graydark dark:text-bodydark3 leading-relaxed">
							Peel off the backing, press on your wall, and smile. No nails, no
							damage. Move them around anytime.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
