import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
				<div className="w-1/3 bg-teal-500 flex flex-col items-center justify-center p-8 text-white">
					<h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
					<Link to="/login">
						<button className="bg-white text-teal-500 font-semibold py-3 px-6 rounded-full transition duration-300 hover:bg-teal-600 hover:text-white">
							Sign in
						</button>
					</Link>
				</div>
				<div className="w-2/3 bg-white p-8">
					<form onSubmit={handleSubmit} className="flex flex-col items-center">
						<h1 className="text-4xl font-bold mb-6">Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="w-80 p-4 mb-4 rounded-lg bg-gray-200 focus:outline-none"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="w-80 p-4 mb-4 rounded-lg bg-gray-200 focus:outline-none"
						/>
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
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
