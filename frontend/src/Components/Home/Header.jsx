import React from 'react';
import { Link } from "react-router-dom";
import styles from '../../styles';



const Header = () => {
return (
<div className={`fixed w-full h-16 bg-zinc-900 flex items-center w-full h-16 top-0 left-0 z-50 justify-between px-6`}>
    <div className='flex gap-1 '>
<img src='/bird.png'  className='h-10 w-10 '/>
{/* website Name */}
<h1 className="text-amber-300 text-4xl font-bold ">NestQuest</h1>
</div>

{/* Navbar Links */}
<div className="flex gap-5">
<Link to="/" className="text-white  flex items-center justify-center p-1 hover:text-amber-300 transition duration-300">
Home
</Link>
<Link to="/Property" className="text-white flex items-center justify-center p-1 hover:text-amber-300 transition duration-300">
Post Your Property
</Link>
<Link to="/SignUp" className="text-white flex items-center justify-center p-1 hover:text-amber-300 transition duration-300">
SignUp
</Link>
<Link to="/LogIn" className="text-black text-md text-bold flex items-center justify-center  rounded-md p-2 bg-yellow-300  border-2 uppercase  hover:text-amber-300 transition duration-300 mr-4  font-poppins">
LogIn
</Link>
</div>
</div>
);
};
export default Header; //navbar