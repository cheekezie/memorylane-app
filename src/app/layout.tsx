import type { Metadata, Viewport } from "next";
import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
import { ClientProviders } from "./ClientProviders";

const sora = Sora({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-sora",
	display: "swap",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Memory Lane App",
	description: "...turn your Photos into Frames in minutes.",
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Memory Lane App",
	},
	applicationName: "Memory Lane App",
	other: {
		"mobile-web-app-capable": "yes",
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	themeColor: "#6d4a9c",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${sora.variable} ${poppins.variable}`}
			suppressHydrationWarning
		>
			<head>
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Memory Lane App" />
			</head>
			<body className="font-sora antialiased">
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
