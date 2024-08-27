import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialLayout from "../components/initialLayout";
import Home from "../pages/home";

function AppRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<InitialLayout />}>
						<Route path="/" element={<Home/>}/>
						<Route path="/mural" element={<div><p>Nada encontrado</p></div>}/> 
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default AppRoutes;
