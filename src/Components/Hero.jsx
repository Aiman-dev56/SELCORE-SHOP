import { motion } from "framer-motion";
import Image from "/public/images/earpo1.png";
import Image2 from "/public/images/earpods2.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 4000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[150vh] md:h-[100vh] w-full grid grid-cols-1 md:grid-cols-1 items-center px-4">
        
        {/* Left Image */}
        <motion.img
          src={Image}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[40%]"
          initial={{ x: 0 }}
          whileHover={{ x: -50 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        />

        {/* Right Image */}
        <motion.img
          src={Image2}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[80%] sm:w-[60%] md:w-[40%]"
          initial={{ x: 0 }}
          whileHover={{ x: 50 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        />

        {/* Content */}
        <div className="z-10 mt-40 md:mt-20 flex flex-col md:flex-row md:max-w-full gap-8 items-center md:items-start" data-aos="fade-in">
          
          {/* Main Title */}
          <div className="text-center md:text-left">
            
            <h1 className="text-white text-[80px] sm:text-[120px] md:text-[200px] leading-none">
              SELCORE
            </h1> 
            
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 md:mt-6 gap-4">
              <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] max-w-100 md:max-w-[60%]">
                Your Ultimate Destination for the Best Value Electronics and Gadgets
              </p>
              <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] hover:underline cursor-pointer">
                Shop now
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col bg-purple-100/20 rounded-lg font-mono p-5 w-full sm:w-[80%] md:w-[400px] h-auto md:h-[380px] mt-8 md:mt-0">
            <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] mt-2">
              Sign up to receive updates on new products and special offers
            </p>
            <label className="text-white text-[16px] sm:text-[18px] md:text-[20px] mt-5 w-full">
              Enter your email*
              <input
                type="email"
                placeholder=""
                className="w-full border-b-2 mt-2 border-gray-400 focus:border-gray-500 outline-none placeholder-gray-50 py-1"
              />
            </label>
            <div className="flex flex-col mt-4">
              <label className="text-white mt-5 inline-flex gap-2 text-[14px] sm:text-[16px] md:text-[18px]">
                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                Yes, subscribe me to your newsletter.
              </label>
              <button className="bg-purple-500 p-2 mt-4 rounded-md w-full text-md sm:w-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center text-center items-center mt-10">
        <div className="border-2 rounded-lg w-[90%] border-white"></div>
      </div>
    </div>
  );
}
