import React from "react";
import { BsFillHouseDoorFill } from "react-icons/bs";

const Header = () => {
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

	const getCurrentAdmin = (names: Array<string>) =>
		names[~~(Math.random() * names.length)];

	return (
		<header className="flex justify-between items-center px-4 py-3 bg-purple-100 text-purple-800">
			<h2>Dashboard</h2>
			<div className="flex items-center gap-2">
				<h2>
					Welcome Back, <strong>{getCurrentAdmin(names)}</strong>
				</h2>
				<BsFillHouseDoorFill className="cursor-pointer" />
			</div>
		</header>
	);
};

export default Header;
