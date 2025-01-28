import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const UserSignup = () => {


  const [profilePic, setProfilePic] = useState(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleUpdateProfilePic = () => {
    if (!profilePic) {
      alert("Please select a profile picture to update.");
      return;
    }
    const formData = new FormData();
    formData.append("profilePic", profilePic);

    console.log("Profile picture updated!", profilePic.name);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle the signup logic here
    console.log("Signup submitted!");
  };
  return (
    <>
    <div className='flex-grow bg-green-100 py-10 overflow-scroll mt-24'> 
        
            <div className="max-w-md mx-auto mt-10 p-6 bg-green-300 shadow-xl rounded-2xl">
                <h2 className="text-2xl font-bold text-center mb-6">User Signup</h2>
                <form onSubmit={handleSignup} className="space-y-4">
                    
                     <div className="flex flex-col items-center">
                        <div className="relative w-32 h-32 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center overflow-hidden">
                            {profilePic ? (
                            <img
                                src={URL.createObjectURL(profilePic)}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            ) : (
                            <span className="text-gray-500">No Image</span>
                            )}
                            <label
                            htmlFor="profilePic"
                            className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600"
                            >
                            <FiEdit2 className="w-4 h-4" />
                            </label>
                            <input
                            type="file"
                            id="profilePic"
                            accept="image/*"
                            className="hidden"
                            onChange={handleProfilePicChange}
                            />
                        </div>
                        <button
                            type="button"
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                            onClick={handleUpdateProfilePic}
                        >
                            Update Profile Pic
                        </button>
                        </div>
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
                    />
                    </div>
                    <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                    </div>
                    <button
                    type="submit"
                    className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                    >
                    Signup
                    </button>
                </form>
            </div>
h
       

    </div>
    </>
  )
}

export default UserSignup