import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaSnapchat, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-6 border-t ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Left Section - Logo & Social Media */}
        <div>
          <h2 className="text-2xl font-bold flex items-center justify-center md:justify-start">
            <span className="text-amber-300">NestQuest</span>
          </h2>
          <p className="text-white text-sm mt-2">
            You are one click away from your next rental property
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaLinkedin />
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaSnapchat />
            </a>
            <a href="#" className="text-white hover:text-orange-500 text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex justify-center md:justify-start space-x-16">
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="text-white mt-2 space-y-2">
              <li><a href="#" className="hover:text-amber-300">Home</a></li>
              <li><a href="#" className="hover:text-amber-300">PG Relax Plan</a></li>
              <li><a href="#" className="hover:text-amber-300">How it works</a></li>
              <li><a href="#" className="hover:text-amber-300">Why choose us</a></li>
              <li><a href="#" className="hover:text-amber-300">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Legal</h3>
            <ul className="text-white mt-2 space-y-2">
              <li><a href="#" className="hover:text-amber-300">Terms of use</a></li>
              <li><a href="#" className="hover:text-amber-300">Privacy policy</a></li>
              <li><a href="#" className="hover:text-amber-300">Sitemap</a></li>
              <li><a href="#" className="hover:text-amber-300">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-300">Blog</a></li>
  </ul>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div>
          <h3 className="font-bold text-white">Contact Us</h3>
          <div className="mt-4">
            <input type="text" placeholder="Name" className="w-[48%] p-2 border text-white rounded-md mr-2" />
            <input type="text" placeholder="Phone Number" className="w-[48%] p-2 border rounded-md" />
            <textarea placeholder="Message" className="w-full p-2 border rounded-md mt-2"></textarea>
            <button className="w-full mt-4 bg-amber-300 text-white py-2 rounded-md hover:bg-orange-600">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright & Heart Icon */}
      <div className="mt-8 text-center text-gray-600 text-sm">
        <div className="flex justify-center mb-2">
          <div className="h-10 w-10  flex items-center justify-center rounded-full">
            
          </div>
        </div>
        Copyright &copy; 2022 - {new Date().getFullYear()} NestQuest Innovate Private Limited
      </div>
    </footer>
  );
};

export default Footer;
