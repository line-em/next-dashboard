import Link from "next/link";

import {
	BsPersonFill,
	BsFillHouseDoorFill,
	BsFillCartFill,
	BsBarChartFill,
	BsGearFill
} from "react-icons/bs";
// { children }: React.PropsWithChildren<{}>
const Sidebar = () => {
	return (
		<aside className="h-screen bg-white flex flex-col items-center py-4">
			<Link href={"/"}>
				<div className="bg-purple-800 p-3 rounded-lg inline-block hover:bg-purple-600 transition-colors">
					<BsFillHouseDoorFill className="text-gray-100 cursor-pointer" />
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			<Link href={"/customers"}>
				<div className="bg-gray-100 p-3 rounded-lg inline-block hover:bg-purple-100 transition-colors">
					<BsPersonFill className="text-gray-800 cursor-pointer" />
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			<Link href={"/customers"}>
				<div className="bg-gray-100 p-3 rounded-lg inline-block hover:bg-purple-100 transition-colors">
					<BsFillCartFill className="text-gray-800 cursor-pointer" />
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>
			<Link href={"/customers"}>
				<div className="bg-gray-100 p-3 rounded-lg inline-block hover:bg-purple-100 transition-colors">
					<BsBarChartFill className="text-gray-800 cursor-pointer" />
				</div>
			</Link>
			<span className="border-gray-200 w-full border-b-[1px] my-5"></span>{" "}
			<Link href={"/customers"}>
				<div className="bg-gray-100 p-3 rounded-lg inline-block hover:bg-purple-100 transition-colors">
					<BsGearFill className="text-gray-800 cursor-pointer" />
				</div>
			</Link>
		</aside>
	);
};

export default Sidebar;
