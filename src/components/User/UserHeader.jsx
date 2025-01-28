import React,{useState} from 'react'
import logo from '../../assets/logo.png'
import { FiSearch } from 'react-icons/fi'; 
import { IoCart } from "react-icons/io5";



const UserHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
   

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
  <>
      <div className='bg-green-300 flex justify-around p-2  items-center fixed top-0 left-0 w-full z-50 shadow-lg' >
            <div className="flex flex-0.5 items-center space-x-4 p-4">
        
                <div className="w-12 h-12">
                    <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div className='hidden md:block'>
                    <h1 className="text-3xl font-bold text-white">Foodie Buddie</h1>
                </div>
            </div>
            <div className='flex  border-black  bg-white h-12 rounded-full p-2 '>
                    <FiSearch className="text-gray-600 h-6 w-6 " />
                    <input
                    type="text"
                    placeholder="Search..."
                    className="ml-2 outline-none border-none bg-transparent text-sm text-gray-700 w-full"
                    />
            </div>
            <div className='flex items-center flex-0.8 gap-4 max-w-80 '>
               
                <div className='relative inline-block cursor-pointer '>
                    <IoCart  className='h-10 w-10'/>
                    <div className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>0</div>
                </div>
                <div className="relative">
                    <div className="cursor-pointer" onClick={toggleDropdown}>
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png" alt="Dropdown Trigger" className="max-w-16 max-h-14 rounded-full border border-black p-1" />
                    </div>

                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 p-2 bg-green-100 border border-gray-300 rounded-lg shadow-lg">
                        <ul className='p-1'>
                            <li className="p-2 mb-1 hover:bg-gray-200 cursor-pointer bg-green-200 rounded-full ">Profile</li>
                            <li className="p-2 mb-1 hover:bg-gray-200 cursor-pointer bg-orange-200 rounded-full " >Orders</li>
                            <li className="p-2 mb-1 hover:bg-gray-200 cursor-pointer bg-red-200 rounded-full " >Add address</li>
                            <li className="p-2 mb-1 hover:bg-gray-200 cursor-pointer bg-red-200 rounded-full ">Contact us</li>
                            <li className="p-2 mb-1 hover:bg-gray-200 cursor-pointer bg-yellow-200 rounded-full " >LogOut</li>

                        </ul>
                        </div>
               )}
                </div>
                
            </div>
            

           
    </div>

  </>
  )
  
}

export default UserHeader