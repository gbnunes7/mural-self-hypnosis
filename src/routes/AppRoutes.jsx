import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialLayout from "../components/initialLayout";
import Home from "../pages/home";
import MuralPage from "../pages/muralPage";

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<InitialLayout />}>
						<Route path="/" element={<Home/>}/>
						<Route path="/mural" element={<MuralPage/>}/> 
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default AppRoutes;
