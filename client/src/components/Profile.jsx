import { useState } from "react";
import { useUser } from "../store/userstore";

export function Profile() {
  const [user] = useUser((state) => [state.user]);
  console.log(user);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-indigo-500">
      <div className="bg-white p-8 rounded-lg shadow-md transform transition-all duration-500 hover:scale-105">
        {user ? (
          <div>
            <h1 className="text-3xl font-bold text-purple-800 mb-2">
              Welcome DEAR {user.username}
            </h1>
            <p className="text-gray-700">Email: {user.email}</p>
          </div>
        ) : (
          <p className="text-gray-700">Loading...</p>
        )}
      </div>
    </div>
  );
}
