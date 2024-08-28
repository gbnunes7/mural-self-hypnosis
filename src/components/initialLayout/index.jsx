import { Outlet } from "react-router";
import Footer from "../footer";
import Header from "../header";

const InitialLayout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default InitialLayout;
