import React from "react";
import Header from "./Header";

const Sidebar = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<div className="grid grid-cols-main">
			<aside className="h-screen bg-white flex flex-col">
				<p>oi</p>
			</aside>
			<main className="w-full">
				<Header />
				{children}
			</main>
		</div>
	);
};

export default Sidebar;
