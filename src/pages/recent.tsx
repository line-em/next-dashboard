import { GetStaticProps } from "next";
import { getUsers, User } from "@/fixtures/getUsers";
import { MdShoppingBag } from "react-icons/md";

interface Props {
	users: User[];
}

const Customers = ({ users }: Props) => {
	return (
		<main className="bg-neutral-100 min-h-[94.5vh] sm:overflow-hidden">
			<section className="flex justify-between sm:p-4 w-full">
				<div className="w-full m-auto p-4 border rounded-lg bg-white sm:overflow-y-auto sm:h-[90vh] h-[100vh]">
					<div className="my-3 px-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center justify-between cursor-pointer gap-4 text-purple-800 font-bold">
						<span className="sm:text-left text-right max-w-fit">Order</span>
						<span className="hidden md:grid">Product</span>
						<span>Status</span>
						<span className="hidden sm:grid">Time</span>
					</div>
					<ul>
						{users.map((order) => (
							<li
								key={order.id}
								className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 items-center justify-between cursor-pointer gap-4"
							>
								<article className="flex items-center">
									<div
										className="bg-purple-100 p-3 rounded-lg"
										aria-hidden
									>
										<MdShoppingBag className="text-purple-800" />
									</div>
									<div className="flex-col">
										<p className="pl-4 md:flex font-bold">
											{order.lastItemPrice}
										</p>
										<p className="pl-4 text-gray-600 text-xs">
											{order.name}
										</p>
									</div>
								</article>
								<p className="hidden md:grid">{order.lastItemName}</p>
								<p>
									<span
										className={`p-2 rounded-lg ${
											order.status === "Completed"
												? "bg-green-200"
												: order.status === "Processing"
												? "bg-blue-200"
												: "bg-red-200"
										}`}
									>
										{order.status}
									</span>
								</p>
								<p className="hidden sm:grid">{order.time}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const users = getUsers(20);
	return {
		props: { users }
	};
};

export default Customers;
