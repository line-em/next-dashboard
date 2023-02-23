import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="grid grid-cols-main">
			<Sidebar />
			<main className="w-full">
				<Header />
				<Component {...pageProps} />
			</main>
		</div>
	);
}
