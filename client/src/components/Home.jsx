import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-purple-600 via-blue-400 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
        <h1 className="text-3xl font-bold text-purple-800 mb-2">
          Welcome! 🌟
        </h1>
        <p className="text-gray-700 mb-4">Please sign up or log in</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/Register"
            className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign up
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
