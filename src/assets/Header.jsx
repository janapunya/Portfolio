import React, { useState } from 'react'
import { FaDownload, FaBars } from "react-icons/fa";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://ik.imagekit.io/punya/Punyabrata_Jana.pdf?updatedAt=1755965150324";
    link.click();
  };

  return (
    <>
        <div className='h-17 flex sm:px-10 px-7 justify-between items-center text-xl bg-zinc-800 text-white' id='Home'>
            <div className='hidden sm:block'><h1>Personal</h1></div>
            <div className="hidden sm:block">
                <ul className='flex space-x-7'>
                    <li className=' border-transparent duration-300 border-b-2 hover:border-zinc-600 '>About Me</li>
                    <li className=' border-transparent duration-300 border-b-2 hover:border-zinc-600 '>Skills</li>
                    <li className=' border-transparent duration-300 border-b-2 hover:border-zinc-600 '>Project</li>
                    <li className=' border-transparent duration-300 border-b-2 hover:border-zinc-600 '>Contact Me</li>
                </ul>
            </div>
            <div className="sm:hidden">
                <button onClick={toggleSidebar}>
                    <FaBars size={25} />
                </button>
            </div>
            <button onClick={handleDownload} className=' flex bg-stone-900 h-10 w-27 items-center justify-center rounded-xl hover:scale-110 duration-300'>Resume<FaDownload size={15} className='ml-1' /></button>
        </div>
        {isSidebarOpen && (
            <div className="sm:hidden bg-zinc-800 text-white w-64 fixed inset-y-0 top-17 z-50 transform transition-transform ease-in-out duration-300">
                <ul className="flex flex-col space-y-4 pl-5 p-3 text-xl">
                    <h1 className='sm:hidden text-2xl pb-3'>Personal</h1>
                    <li className=' w-full border-2 border-zinc-700 p-2 rounded-xl hover:bg-stone-900 duration-300'>About Me</li>
                    <li className=' w-full border-2 border-zinc-700 p-2 rounded-xl hover:bg-stone-900 duration-300'>Skills</li>
                    <li className=' w-full border-2 border-zinc-700 p-2 rounded-xl hover:bg-stone-900 duration-300'>Project</li>
                    <li className=' w-full border-2 border-zinc-700 p-2 rounded-xl hover:bg-stone-900 duration-300'>Contact Me</li>
                </ul>
            </div>
        )}
    </>
  )
}

export default Header