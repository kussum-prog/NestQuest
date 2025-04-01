import React from "react";
import animationData from "../Animation2.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-screen justify-center items-center overflow-hidden">
      {/* Lottie Background */}
      <div className="absolute h-140 inset-0 flex justify-center items-center z-10">
        <Lottie animationData={animationData} loop={true} className="w-200 h-100 object-cover" />
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col text-white text-center mt-70 text-4xl font-bold font-poppins z-10">
        <h1>"Where Comfort Meets Convenience!"</h1>

        {/* Curve Image */}
        <div className="flex justify-center mt-4">
          <img src="curve.png" className="h-[20px] w-[300px]" alt="Curve Decoration" />
        </div>

        {/* Subtitle */}
        <p className="text-sm mt-2">"Your Nest, Your Quest – Find It Today!"</p>

        {/* Search Input */}
        <div className="relative mt-4">
          <input
            className="w-[400px] h-10 p-5 bg-white rounded-full text-black text-sm text-center animate-bounce"
            type="text"
            placeholder="Enter Your Location..."
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
