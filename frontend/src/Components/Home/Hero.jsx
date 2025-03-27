import React from 'react';


const Hero = () => {
  return (
    <div className={`flex  h-160 w-full  rounded m-1 justify-center items-center bg-linear-to-b from-zinc-900 
    via-zinc-800 `}>
      <div className={`  flex flex-col   h-100 w-200 sm:w-120  text-white  justify-center items-center text-4xl font-bold font-poppins rounded   ml-4 lg:w-200   `}>
        "Where Comfort Meets Convenience!"
        <div className='w-170 flex justify-center  '>
          <img src='curve.png' className='h-20 w-200 ml-1' />
        </div>
        <div className='w-170 flex justify-center'>
          <p className='text-sm '>
            "Your Nest, Your Quest – Find It Today!"
          </p>
        </div>
        <div className='relative max-w--[23rem] mx-auto md:max-w-5xl xl-mb:mb-24'>
          <div className='relative z-1 p-0.5 rounded-2xl '>

            <input className='w-70 h-10 p-5 bg-white  m-6 rounded-full text-black text-sm animate-bounce ' type='text' placeholder="Enter Your Location..." src='home_loc.svg' />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
