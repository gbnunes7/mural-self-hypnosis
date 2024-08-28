import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialLayout from "../components/initialLayout";
import Home from "../pages/home";
import MuralPage from "../pages/muralPage";
import CardProvider from "../context";

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<CardProvider>
					<Routes>
						<Route path="/" element={<InitialLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="/mural" element={<MuralPage />} />
						</Route>
					</Routes>
				</CardProvider>
			</BrowserRouter>
		</>
	);
}

export default AppRoutes;
