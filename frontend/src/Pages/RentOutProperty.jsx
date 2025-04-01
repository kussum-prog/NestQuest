import React from "react";

const RentOutProperty = () => {
  return (
    <section className="px-10 py-16 bg-black flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/phone.png"
          alt="Mobile App UI"
          className="w-[50%] md:w-[60%]"
        />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-bold text-white mb-4">
          You want to Rent out your property?
        </h2>
        <p className="text-white mb-6">
          Forget the hassle of finding tenants – we've got you covered. Make your
          property easily accessible to potential tenants without paying any
          fees to middlemen. Say goodbye to wasted time on property showings;
          everything tenants need is available on our portal. Upload your
          property in a few easy steps and save time and money with NestQuest.
        </p>
        <button className="bg-amber-300 text-white py-3 px-6 rounded-md font-semibold hover:bg-orange-600 transition-all">
          Post Property For Free
        </button>
      </div>
    </section>
  );
};

export default RentOutProperty;
