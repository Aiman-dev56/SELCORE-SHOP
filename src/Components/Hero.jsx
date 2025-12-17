import { motion } from "framer-motion";
import Image from "/public/images/earpo1.png";
import Image2 from "/public/images/earpods2.png";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";






export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
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

  const handleSubmit = () => {
    if (email && subscribed) {
      alert('Thank you for subscribing!');
      setEmail('');
      setSubscribed(false);
    }
  };

  return (
    <div className="relative w-full ">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-20">

        {/* LEFT IMAGE - Responsive positioning */}
        <motion.img
          src={Image}
          alt="Left decoration"
          className="
             lg:block absolute 
            left-0 top-1/2 -translate-y-1/2 
            w-[30%] max-w-[400px]
            xl:w-[28%] xl:max-w-[450px]
            2xl:w-[25%] 2xl:max-w-[500px]
            object-contain
          "
          whileHover={{ x: -40 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        />

        {/* RIGHT IMAGE - Responsive positioning */}
        
        <motion.img
          src={Image2}
          alt="Right decoration"
          className="
           lg:block absolute 
            right-0 top-1/2 -translate-y-1/2 
            w-[30%] max-w-[400px]
            xl:w-[28%] xl:max-w-[450px]
            2xl:w-[25%] 2xl:max-w-[500px]
            object-contain
          "
          whileHover={{ x: 40 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        />

        {/* CONTENT CONTAINER - Constrained width for large screens */}
        <div className="
          relative z-10 w-full 
          max-w-7xl 
          mx-auto 
          grid grid-cols-1 lg:grid-cols-2 
          gap-8 lg:gap-12 xl:gap-16
          items-center
        " data-aos="fade-in">

          {/* TEXT CONTENT */}
          <div className="text-center lg:text-left space-y-6">
            {/* Responsive Heading */}
            <h1 className="
              leading-[0.85] font-bold tracking-tight
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              xl:text-9xl
              2xl:text-[180px]
            ">
              SELCORE
            </h1>

            {/* Subheading & CTA */}
            <div className="space-y-4">
              <p className="
                text-white/90 
                text-sm sm:text-base md:text-lg 
                max-w-xl mx-auto lg:mx-0
                leading-relaxed
              ">
                Your Ultimate Destination for the Best Value Electronics and Gadgets
              </p>
              
              <button className="
                text-white underline underline-offset-4
                hover:text-purple-300 transition-colors
                text-sm sm:text-base font-medium
              ">
                Shop now →
              </button>
            </div>
          </div>

          {/* NEWSLETTER FORM */}
          <div className="
            bg-white/10 backdrop-blur-sm
            rounded-xl p-6 sm:p-8
            max-w-md w-full 
            mx-auto lg:mx-0 lg:ml-auto
            border border-white/20
            shadow-xl
          ">
            <h3 className=" text-base sm:text-lg font-medium leading-relaxed">
              Sign up to receive updates on new products and special offers
            </h3>

            <div className="mt-6 space-y-5">
              {/* Email Input */}
              <div>
                <label className="block text-white/90 text-sm mb-2">
                  Enter your email*
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onClick={(e) => isChecked(handleChange)}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full bg-transparent 
                    border-b-2 border-white/50 
                    py-2 px-1
                    text-white placeholder:text-white/40
                    outline-none
                    focus:border-white transition-colors
                  "
                />
              </div>

              {/* Checkbox */}
              <label className="flex items-start gap-3 text-white/90 text-sm cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={subscribed}
                  onChange={(e) => setSubscribed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-purple-500"
                />
                <span>Yes, subscribe me to your newsletter.</span>
              </label>

              {/* Submit Button */}
              <button 
                onClick={handleSubmit}
                className="
                  w-full sm:w-auto
                  bg-purple-500 hover:bg-purple-600 
                  px-8 py-3 
                  rounded-lg 
                  text-white font-medium
                  transition-colors
                  shadow-lg hover:shadow-xl
                  disabled:opacity-50 disabled:cursor-not-allowed
                "
                disabled={!email || !subscribed}
              >
                Submit
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="w-full flex justify-center pb-12 px-4">
        <div className="border-t border-white/30 w-full max-w-7xl"></div>
      </div>
    </div>
  );
}
