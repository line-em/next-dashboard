import React from "react";
import { GetStaticProps } from "next";
import { BsPersonFill } from "react-icons/bs";
import { getUsers, User } from "@/fixtures/getUsers";

interface Props {
	users: User[];
}

const customers = ({ users }: Props) => {
	return (
		<main className="bg-gray-100 min-h-screen">
			<section className="flex justify-between sm:p-4">
				<section className="sm:p-4">
					<div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
						<div className="my-3 p-2 grid lg:grid-cols-table sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer gap-4">
							<span>Name</span>
							<span className="sm:text-left text-right max-w-fit">
								Total
							</span>
							<span className="hidden sm:grid">Status</span>
							<span className="hidden lg:grid">E-mail</span>
							<span className="hidden lg:grid">Country</span>
						</div>
						<ul>
							{users.map((user) => (
								<li
									key={user.id}
									className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid lg:grid-cols-table sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer gap-4"
								>
									<div className="flex items-center">
										<div className="bg-purple-100 p-3 rounded-lg">
											<BsPersonFill className="text-purple-800" />
										</div>
										<p className="pl-4 md:flex">{user.name}</p>
									</div>
									<p>{user.total}</p>
									<p className="hidden sm:grid">{user.status}</p>
									<p className="hidden md:grid text-gray-600 sm:text-left text-right">
										{user.email}
									</p>
									<p className="hidden lg:grid">{user.country}</p>
								</li>
							))}
						</ul>
					</div>
				</section>
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

export default customers;
