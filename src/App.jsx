import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Router>
			<div className="min-h-screen bg-gray-100">
				<Routes>
					{user ? (
						<Route path="/" element={<Main />} />
					) : (
						<Route path="/" element={<Navigate replace to="/login" />} />
					)}
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
