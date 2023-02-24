import Link from "next/link";
import { useRouter } from "next/router";
import {
	BsPersonFill,
	BsFillHouseDoorFill,
	BsBarChartFill,
	BsGearFill
} from "react-icons/bs";
import { MdShoppingBag } from "react-icons/md";
// { children }: React.PropsWithChildren<{}>
const Sidebar = () => {
	const { asPath } = useRouter();
	return (
		<aside className="h-screen bg-white flex flex-col items-center py-4">
			<Link href={"/"}>
				<div
					className={`${
						asPath === "/" ? "bg-purple-800" : "bg-gray-100"
					} p-3 rounded-lg inline-block hover:bg-purple-400 transition-colors`}
				>
					<BsFillHouseDoorFill
						className={`${
							asPath === "/" ? "text-gray-100" : "text-gray-800"
						} cursor-pointer`}
					/>
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			<Link href={"/customers"}>
				<div
					className={`${
						asPath === "/customers" ? "bg-purple-800" : "bg-gray-100"
					} p-3 rounded-lg inline-block hover:bg-purple-400 transition-colors`}
				>
					<BsPersonFill
						className={`${
							asPath === "/customers" ? "text-gray-100" : "text-gray-800"
						} cursor-pointer`}
					/>
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			<Link href={"/recent"}>
				<div
					className={`${
						asPath === "/recent" ? "bg-purple-800" : "bg-gray-100"
					} p-3 rounded-lg inline-block hover:bg-purple-400 transition-colors`}
				>
					<MdShoppingBag
						className={`${
							asPath === "/recent" ? "text-gray-100" : "text-gray-800"
						} cursor-pointer`}
					/>
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			{/* <Link href={"/customers"}> */}
			<div className="bg-gray-100 p-3 rounded-lg inline-block">
				<BsBarChartFill className="text-gray-300" />
			</div>
			{/* </Link> */}
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>{" "}
			{/* <Link href={"/customers"}> */}
			<div className="bg-gray-100 p-3 rounded-lg inline-block">
				<BsGearFill className="text-gray-300" />
			</div>
			{/* </Link> */}
		</aside>
	);
};

export default Sidebar;
