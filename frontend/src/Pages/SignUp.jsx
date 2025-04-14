
import { Link } from 'react-router-dom';
import LogIn from './LogIn';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
  const [Values, setValues] = useState({
    username: '',
    password: '',
    email: '',
    address: '',
  });

  const navigate = useNavigate();

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "" || Values.email === "" || Values.address === "") {
        toast.info('Please fill all the fields');
      } else {
        console.log(Values);
        const response = await axios.post('http://localhost:5000/api/auth/SignUp', Values);
        toast.success(response.data.message);
        navigate('/LogIn');
      }
    }
    catch (error) {
      if (error.response) {
        console.log(error.response.data);
        toast.error(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
        toast.error('No response from server');
      } else {
        console.log(error.message);
        toast.error(error.message);
      }
    }
  };



  return (

    <div className='flex justify-center items-center h-screen bg-black mt-20 bg-opacity-0'>
      <div class="px-6 py-4 w-full md:w-3/6 lg:w-2/6 bg-amber-300  text-lg  justify-center  mt-2  w-2xl h-170  font-md border-black-600 border-4 rounded-2xl  layout-vertical font-family-[Times New Roman]">
        <p class=" text-xl  text-center font-extrabold">
          SignUp
        </p>
        <div className="mt-4 flex flex-row inline-block">
          <div>
            <label htmlFor='' className="text-black font-bold mr-2">
              Username:
            </label>
            <input type="text" placeholder='Enter Your Name' minLength={6} className="w-70  h-8 mt-2 bg-white  text-black  p-2 outline-none  rounded"
              name='username'
              required
              value={Values.username}
              onChange={change} />
          </div>
        </div>
        <div className="flex flex-row  inline-block mt-3 ">
          <label htmlFor='' className="text-black  font-bold  mr-3">
            Password:
          </label>
          <input type="password" name='password' placeholder='  Enter Your Password' className="w-70  h-8 bg-white text-black outline-none  rounded"

            required
            value={Values.password}
            onChange={change} />
        </div>

        <div className="flex flex-row  inline-block mt-3  ">
          <label htmlFor='' className="text-black  font-bold  mr-3">
            Email:
          </label>
          <input type="email" name='email' placeholder='  abc123@gmail.com' className="w-70  h-8 bg-white ml-10 text-black outline-none  rounded"
            required
            value={Values.email}
            onChange={change}

          />
        </div>

        <div className="flex flex-row  inline-block mt-3 ">
          <label htmlFor='' className="text-black  font-bold  mr-3">
            Address:
          </label>
          <textArea rows={8} cols={40} name='address' placeholder='  Enter Your current Address' className="bg-white text-black outline-none  rounded  ml-4 mt-3"
            required
            value={Values.address}
            onChange={change}
          />
        </div>

        <div className="flex flex-row justify-center items-center">
          <button className="bg-black text-center text-white mt-5  rounded-full w-40 h-8 font-bold hover:bg-blue-500  transition duration-300 ease-in-out"
            onClick={submit}>
            SignUp
          </button>
        </div>
        <div className="flex flex-row justify-center items-center">
          <button className="bg-black text-center text-white mt-5  rounded-full w-60 h-8 font-bold hover:bg-blue-500  transition duration-300 ease-in-out"
            onClick={submit}>
            Continue with Google
          </button>
        </div>
        <p className='flex mt-1 items-center justify-center text-zinc-200 font-semibold'>Or</p>
        <p className='flex mt-1 items-center justify-center text-blue-500 font-semibold'>
          Already have an account? &nbsp;
          <Link to="/LogIn" className='hover:text-black  transition duration-300'><u>LogIn</u></Link>
        </p>

      </div>
    </div>


  )
}

export default SignUp;