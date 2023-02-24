import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Rubik } from "@next/font/google";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
} from "chart.js";
import { User } from "@/fixtures/getUsers";
import { getRandomSalesData, totalPrice } from "@/utils/financeFuncs";

const rubik = Rubik({ subsets: ["latin"] });

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Props {
	data: User[];
}

interface ChartData {
	labels: Array<string>;
	datasets: DataSets[];
}

interface DataSets {
	label: string;
	data: Array<number>;
	borderColor: string;
	backgroundColor: string;
}

interface ChartOptions {
	plugins: {
		legend: {
			position: "bottom";
		};
		title: {
			display: boolean;
			text: string;
			font: {
				family: string;
				size: number;
			};
		};
	};
	responsive: boolean;
	maintainAspectRatio: boolean;
}

const BarChart = ({ data }: Props) => {
	const [chartData, setChartData] = useState<ChartData>({
		labels: [],
		datasets: []
	});

	const [chartOptions, setChartOptions] = useState<ChartOptions>({
		plugins: {
			legend: {
				position: "bottom"
			},
			title: {
				display: true,
				text: "Daily Revenue",
				font: {
					family: rubik.style.fontFamily,
					size: 16
				}
			}
		},
		responsive: true,
		maintainAspectRatio: false
	});

	useEffect(() => {
		const daysOfWeek = [
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		];
		const salesData = getRandomSalesData(totalPrice(data));

		setChartData({
			labels: daysOfWeek,
			datasets: [
				{
					label: "Sales",
					data: salesData,
					borderColor: "#9F7AEA",
					backgroundColor: "#9f7aeab3"
				}
			]
		});
	}, []);
	return (
		<section className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
			<Bar data={chartData} options={chartOptions} />
		</section>
	);
};

export default BarChart;
