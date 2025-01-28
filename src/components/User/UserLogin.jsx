import React,{useState} from 'react'

const UserLogin = () => {

    const [showOtp, setShowOtp] = useState(false);

    const handleLogin = (e) => {
      e.preventDefault();
      
      console.log("Login submitted!");
      setShowOtp(true); 
    };
  
    const handleOtpSubmit = (e) => {
      e.preventDefault();
      
      console.log("OTP submitted!");
    };
  

  return (
    <div className=' bg-green-100  overflow-scroll mt-24 min-h-screen'> 
         <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                
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
                className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                Login
                </button>
            </form>

            {showOtp && (
                <form onSubmit={handleOtpSubmit} className="mt-6 space-y-4">
                
                <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    OTP
                    </label>
                    <input
                    type="text"
                    id="otp"
                    name="otp"
                    className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the OTP"
                    required
                    />
                </div>

                
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Submit OTP
                </button>
                </form>
            )}
        </div>
    </div>

  )
}

export default UserLogin