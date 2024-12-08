import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-gray-900 text-white px-4 md:px-10 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo */}
        <div className="text-lg font-semibold">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">LOGO</Link>
        </div>
        {/* Desktop Links */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home1</Link>
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home2</Link>
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home3</Link>
        </div>

        {/* User Profile */}
        <div className="hidden sm:block">
          <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png' width='50px' height='50px' className='rounded-full cursor-pointer'/>
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="sm:hidden text-2xl focus:outline-none">
          {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          {/* <h2 className="text-lg font-semibold">Home</h2> */}
          <img src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png' width='50px' height='50px' className='rounded-full cursor-pointer'/>
          <button onClick={toggleSidebar} className="text-2xl focus:outline-none">
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <Link to="/" onClick={toggleSidebar} className="hover:text-gray-300 transition duration-300">
            Home1
          </Link>
          <Link to="/" onClick={toggleSidebar} className="hover:text-gray-300 transition duration-300">
            Home2
          </Link>
          <Link to="/" onClick={toggleSidebar} className="hover:text-gray-300 transition duration-300">
            Home3
          </Link>
          
        </div>
      </div>

      {/* Overlay to close sidebar on outside click */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;