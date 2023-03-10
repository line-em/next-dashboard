import Head from "next/head";
import { Rubik } from "@next/font/google";
import TopCards from "@/components/TopCards";
import BarChart from "@/components/BarChart";
import RecentOrders from "@/components/RecentOrders";
import { getUsers, User } from "@/fixtures/getUsers";
import { GetStaticProps } from "next";

const rubik = Rubik({ subsets: ["latin"] });

interface Props {
	data: User[];
}

export default function Home({ data }: Props) {
	return (
		<>
			<Head>
				<title>Next Dashboard</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<style jsx global>{`
					html {
						font-family: ${rubik.style.fontFamily};
					}
				`}</style>
			</Head>
			<section className="bg-neutral-100 min-h-screen">
				<TopCards data={data} />
				<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
					<BarChart data={data} />
					<RecentOrders data={data} />
				</div>
			</section>
		</>
	);
}
export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = getUsers(20);
	return {
		props: { data }
	};
};
