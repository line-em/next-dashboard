import Link from "next/link";
import { useState } from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Header = () => {
	const { asPath } = useRouter();
	console.log(asPath);

	const names: Array<string> = [
		"Basil",
		"Cedric",
		"Daisy",
		"Fern",
		"Hazel",
		"Iris",
		"Lily",
		"Olive",
		"Rose",
		"Willow"
	];

	const [currentAdmin, setCA] = useState(
		names[Math.floor(Math.random() * names.length)]
	);

	return (
		<header className="flex justify-between items-center px-4 py-3 bg-purple-200 text-purple-800">
			<h2 className="font-bold">
				{asPath === "/customers"
					? "Customers"
					: asPath === "/recent"
					? "Last Orders"
					: "Dashboard"}
			</h2>
			<div className="flex items-center gap-2 flex-wrap ml-auto">
				<h2 className="hidden sm:block">
					Welcome Back,<strong>{" " + currentAdmin}</strong>
				</h2>
				<Link href={"/"}>
					<BsFillHouseDoorFill className="cursor-pointer" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
