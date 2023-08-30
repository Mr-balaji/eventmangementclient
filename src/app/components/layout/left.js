import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full sm:w-1/4 bg-black text-white p-6 shadow-lg  ">
      <h1 className="text-3xl font-semibold mb-6">DashBoard</h1>
      <ul className="space-y-6 sm:space-y-10">
      <Link href="/pages/profile" >
        <li className='px-3 py-3 hover:bg-[#ffff] hover:text-[black] transition duration-300 transform hover:translate-x-1 cursor-pointer'>
          <p  className="hover:text-[black] text-lg sm:text-2xl">Home</p>
        </li>
        </Link>
        <Link href="/pages/addpostpage" className='mt-3' >
        <li className='px-3 py-3 hover:bg-[#ffff] hover:text-[black] transition duration-300 transform hover:translate-x-1 cursor-pointer'>
          <p  className="hover:text-[black] text-lg sm:text-2xl">Add Post</p>
        </li>
        </Link>
        <Link href="#">
        <li className='px-3 py-3 hover:bg-[#ffff] hover:text-[black] transition duration-300 transform hover:translate-x-1 cursor-pointer'>
          <p href="#" className="hover:text-[black] text-lg sm:text-2xl">Services</p>
        </li>
        </Link>
        <li className='px-3 py-3 hover:bg-[#ffff] hover:text-[black] transition duration-300 transform hover:translate-x-1 cursor-pointer'>
          <a href="#" className="hover:text-[black] text-lg sm:text-2xl">Portfolio</a>
        </li>
        <li className='px-3 py-3 hover:bg-[#ffff] hover:text-[black] transition duration-300 transform hover:translate-x-1 cursor-pointer'>
          <a href="#" className="hover:text-[black] text-lg sm:text-2xl">Contact</a>
        </li>
      </ul>
      <div className="mt-6 sm:mt-8">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
