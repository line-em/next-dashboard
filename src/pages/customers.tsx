import React from "react";
import { GetStaticProps } from "next";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { User } from "@/fixtures/generateUsers";

interface Props {
	users: User[];
}

const customers = ({ users }: Props) => {
	return (
		<main className="bg-gray-100 min-h-screen">
			<section className="flex justify-between p-4">
				<h2>Customers</h2>
				<h2>Welcome Back, Clint</h2>
				<header className="p-4">
					<div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
						<div className="my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
							<span>Name</span>
							<span className="sm:text-left text-right">Total</span>
							<span className="hidden md:grid">Status</span>
							<span className="hidden sm:grid">E-mail</span>
							<span className="hidden sm:grid">Country</span>
						</div>
						<ul>
							{users.map((user) => (
								<li
									key={user.id}
									className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
								>
									<div className="flex items-center">
										<div className="bg-purple-100 p-3 rounded-lg">
											<BsPersonFill className="text-purple-800" />
										</div>
										<p className="pl-4">{user.name}</p>
									</div>
									<p>{user.total}</p>
									<p>{user.status}</p>
									<p>{user.email}</p>
									<p>{user.country}</p>
								</li>
							))}
						</ul>
					</div>
				</header>
			</section>
		</main>
	);
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const res = await fetch("http://localhost:3000/api/getUsers");
	const users = await res.json();
	return {
		props: { users }
	};
};

export default customers;
