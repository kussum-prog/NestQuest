import React from "react";

const Use = () => {
  return (
    <div className="bg-black flex flex-start gap-3 ">
      <div className="w-1/4   m-10">
        <h2 className="text-4xl font-bold text-white mb-20">How NestQuest Works</h2>
        <p className="text-gray-600 mb-6">
          Discover a diverse range of verified property listings available for rent in your desired location on NestQuest.
          Explore detailed property information and seamlessly connect with property owners without incurring any brokerage fees.
          Find your perfect rental space hassle-free!
        </p>
        <button className="bg-amber-300 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-all">
          Start Searching
        </button>

      </div>


      <div>
        <div className="bg-black text-white  p-6 rounded-lg mt-10 ml-5 shadow-md w-80 h-65  border  border-gray-200">
          <div className="flex  items-center mb-3">
            <span className="text-amber-300 text-3xl mr-3">🔍</span>
            <h3 className="text-xl font-bold">Search Properties</h3>
          </div>
          <p className="text-gray-500">
            Explore Flat, PG, Apartment, House & Room For Rent across Mohali, Chandigarh, Kharar, Zirakpur, and Panchkula by applying diverse filters based on your preferences and desired locations.
          </p>
        </div>

        <div className="bg-black p-6 rounded-lg w-80 h-65 border border-gray-200 mt-15 ml-5  mb-20 ">
          <div className="flex items-center ">
            <span className="text-orange-500 text-3xl mr-3  ">✅</span>
            <h3 className="text-xl font-bold text-white">Rent Properties</h3>
          </div>
          <p className="text-gray-600 mt-6">
            Register as an owner or broker and upload rental property images along with key details, including the complete address and expected rent.
          </p>
        </div>


      </div>
      <div className="bg-black p-6 rounded-lg w-80 h-65 border border-gray-200 mt-60 ml-10 mb-20 ">
        <div className="flex items-center  ">
          <span className="text-orange-500 text-3xl mr-3  ">✅</span>
          <h3 className="text-xl font-bold text-white">Choose Properties</h3>
        </div>
        <p className="text-gray-600 mt-6">
          All rental property details are listed comprehensively, enabling you to review and analyze property information conveniently from your home.
        </p>
      </div>














    </div>


  );
};

export default Use;
