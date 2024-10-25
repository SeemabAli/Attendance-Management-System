import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
				<div className="flex-2 bg-white flex flex-col items-center justify-center p-8">
					<form onSubmit={handleSubmit} className="flex flex-col items-center">
						<h1 className="text-4xl font-bold mb-6">Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="w-80 p-4 mb-4 rounded-lg bg-gray-200 focus:outline-none"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="w-80 p-4 mb-4 rounded-lg bg-gray-200 focus:outline-none"
						/>
						{error && (
							<div className="w-80 p-4 mb-4 text-center text-white bg-red-500 rounded">
								{error}
							</div>
						)}
						<button
							type="submit"
							className="w-80 bg-teal-500 text-white font-semibold py-3 px-6 rounded-full mt-4 transition duration-300 hover:bg-teal-600"
						>
							Sign In
						</button>
					</form>
				</div>
				<div className="flex-1 bg-teal-500 flex flex-col items-center justify-center p-8 text-white">
					<h1 className="text-4xl font-bold mb-4">New Here?</h1>
					<Link to="/signup">
						<button className="bg-white text-teal-500 font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-teal-600 hover:text-white">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
