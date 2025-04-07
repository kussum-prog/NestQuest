import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import Dashboard from './Dashboard';
import { Home, Settings, Users, BarChart2, Menu, BedDouble, DoorOpen } from 'lucide-react';

const Sidebar = () => {

  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-white">
      {/* sidebar */}
      <div className={`${open ? 'w-64' : 'w-16'} bg-zinc-900  text-white h-screen  transition-all  duration-300 p-4`}>
        <div className="flex items-center justify-between mb-6">
          <h1 className={`text-xl font-bold ${!open && 'hidden'}`}>Admin Panel</h1>
          <Menu className="cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        {/* {Sidebar items} */}
        <ul className='space-y-4  '>
          <Link to="/Dashboard" className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Home size={20} />
            {open && <span>Dashboard</span>}
          </Link>
          <Link to="/Users" className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            
              <Users size={20} />
              {open && <span>Users</span>}
            </Link>
          <Link to="/Rooms" className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <DoorOpen size={20} />
            {open && <span>Rooms</span>}
          </Link>
          <Link to={"/Settings"} className="flex items-center space-x-4 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <Settings size={20} />
            {open && <span>Settings</span>}
          </Link>


        </ul>
      </div>



    </div>

  )
}

export default Sidebar