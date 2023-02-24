import { User } from "@/fixtures/getUsers";
import { MdShoppingBag } from "react-icons/md";

interface Props {
	data: User[];
}

const RecentOrders = ({ data }: Props) => {
	return (
		<div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-2 border rounded-lg bg-white overflow-scroll">
			<h2 className="px-2 font-bold">Recent Orders</h2>
			<ul>
				{data.map((order, i: number) => {
					return (
						<li
							key={i}
							className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer gap-3"
						>
							<div className="bg-purple-100 rounded-lg p-3">
								<MdShoppingBag className="text-purple-800" />
							</div>
							<div className="flex justify-between items-center w-full">
								<p className="font-bold">{order.lastItemPrice}</p>
								<div className="text-gray-500 text-xs text-right">
									<p className="font-bold">{order.name}</p>
									<p>{order.time}</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default RecentOrders;
