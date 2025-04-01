import React from 'react';


const Cards = () => {
  return (
    <div className='h-100 w-full margin-1 rounded bg-black text-white'>
      <h1 className='text-white font-poppins text-2xl p-5'>Popular Searches:</h1>
      <div className='flex gap-10 flex justify-center items-center'>
        <div className=' justify-center border-2 items-center  rounded h-60 w-60'>
          <img src="/a.png" alt='pg' className="w-full  h-full object-cover rounded" />
          <div className='w-60 mt-2 rounded bg-black border-2  text-white text-center  '>
            PG in Mohali
          </div>
        </div>
        <div className=' justify-center border-2 items-center  rounded h-60 w-60'>
          <img src="/a.png" alt='pg' className="w-full  h-full object-cover rounded" />
          <div className='w-60 mt-2 rounded bg-black border-2  text-white text-center  '>
            Flats in Mohali
          </div>
        </div>
        <div className=' justify-center border-2 items-center  rounded h-60 w-60'>
          <img src="/a.png" alt='pg' className="w-full  h-full object-cover rounded" />
          <div className='w-60 mt-2 rounded bg-black border-2  text-white text-center  '>
          Rooms in Mohali
          </div>
        </div>
        <div className=' justify-center border-2 items-center  rounded h-60 w-60'>
          <img src="/a.png" alt='pg' className="w-full  h-full object-cover rounded" />
          <div className='w-60 mt-2 rounded bg-black border-2  text-white text-center  '>
          Rooms in Chandigarh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
