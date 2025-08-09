import React from "react";

function UserProfile() {
  return (
    <div className="bg-gray-100 md:p-8 md:max-w-sm sm:max-w-xs sm:p-4 mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl">
      <img
        className="rounded-full md:w-36 md:h-36 mx-auto sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="md:text-xl text-blue-800 my-4 sm:text-lg hover:text-blue-500">
        John Doe
      </h1>
      <p className="text-gray-600 md:text-base sm:text-sm">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
