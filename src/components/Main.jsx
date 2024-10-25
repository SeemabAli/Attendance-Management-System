import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login"); // Redirect to login after logout
	};

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<nav className="w-full h-16 bg-teal-500 flex items-center justify-between px-5">
				<h1 className="text-white text-2xl">Ezitech</h1>
				<button
					className="bg-white text-teal-500 font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-teal-600 hover:text-white"
					onClick={handleLogout}
					aria-label="Logout"
				>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
