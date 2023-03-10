import { GetStaticProps } from "next";
import { getUsers, User } from "@/fixtures/getUsers";
import { BsPersonFill } from "react-icons/bs";
import { Avatar } from "@boringer-avatars/react";
interface Props {
	users: User[];
}

const Customers = ({ users }: Props) => {
	return (
		<main className="bg-neutral-100 min-h-[94.5vh] sm:overflow-hidden">
			<section className="flex justify-between sm:p-4 w-full">
				<div className="w-full m-auto p-4 border rounded-lg bg-white sm:overflow-y-auto sm:h-[90vh] h-[100vh]">
					<div className="my-3 px-2 grid lg:grid-cols-table sm:grid-cols-3 grid-cols-sm-table items-center justify-between cursor-pointer gap-4 text-purple-800 font-bold">
						<span>Name</span>
						<span className="sm:text-left text-right max-w-fit">Total</span>
						<span className="hidden sm:grid">Status</span>
						<span className="hidden lg:grid">E-mail</span>
						<span className="hidden lg:grid">Time</span>
					</div>

					<ul>
						{users.map((user, index) => (
							<li
								key={user.id}
								className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid lg:grid-cols-table sm:grid-cols-3 grid-cols-sm-table items-center justify-between cursor-pointer gap-4"
							>
								<div className="flex items-center">
									{/* <div className="bg-purple-100 p-3 rounded-lg"> */}
									<Avatar
										variant={index % 2 ? "beam" : "ring"}
										name={user.name}
										colors={[
											"#553C9A",
											"#E9D8FD",
											"#B794F4",
											"#E2E8F0",
											"#7F9CF5"
										]}
									/>
									{/* <BsPersonFill className="text-purple-800" /> */}
									{/* </div> */}
									<p className="pl-4 md:flex">{user.name}</p>
								</div>
								<p className="font-bold">{user.total}</p>
								<p className="hidden sm:flex">
									<span
										className={`p-2 rounded-lg ${
											user.status === "Completed"
												? "bg-green-200"
												: user.status === "Processing"
												? "bg-blue-200"
												: "bg-red-200"
										}`}
									>
										{user.status}
									</span>
								</p>
								<p className="hidden lg:grid text-gray-600 sm:text-left text-right">
									{user.email}
								</p>
								<p className="hidden lg:grid">{user.time}</p>
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
