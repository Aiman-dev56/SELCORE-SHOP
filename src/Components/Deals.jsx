import Laptop from "/public/images/laptop.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Mobiles from "/public/images/mobiles.jpg";
import Tablet from "/public/images/tablet1.jpg";
import watch from "/public/images/watch.jpg";
import Logo from "/public/images/logos.png";
import Camera from "/public/images/camera.jpg";
import Headphones from "/public/images/headphones.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Deals() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value.trim() !== "") setError(false);
    };

    const handleLeave = () => {
        if (email.trim() === "") {
            setError(true);
        }
    };

    const handleCheck = (e) => {
        setIsChecked(e.target.checked);
    };

    useEffect(() => {
        Aos.init({
            duration: 1500,
            once: true
        });
    }, []);

    return (
        <div className="bg-gradient-to-r from-[#1f054e] to-[#0f0f0f] min-h-screen text-white justify-center items-center p-5">
            
            {/* ========== HERO SECTION - HOTTEST DEALS ========== */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex justify-center items-center px-4 sm:px-6 lg:px-8">
                
                {/* Background Image */}
                <div className="items-center">
                    <img
                    src={Laptop}
                    alt="Hottest Deals"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    data-aos="fade-in"
                />
                </div>
                

                {/* Overlay Text */}
                <div className="absolute left-4 sm:left-8 md:left-12 lg:left-16 top-6 sm:top-10 md:top-16 lg:top-20 z-10 max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-xl">
                    <h1 className="font-bold text-white drop-shadow-2xl text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-2 sm:mb-3 md:mb-4">
                        Hottest Deals
                    </h1>
                    <p className="text-white drop-shadow-lg text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-4 sm:mb-6 md:mb-10 lg:mb-16">
                        Save up to $150 on selected laptop & tablet brands
                    </p>
                    <Link to="/computer">
                        <button className="bg-white hover:bg-gray-200 text-black font-medium px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base transition-colors shadow-lg">
                            View All
                        </button>
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <hr className="border-white/30 mx-4 sm:mx-6 lg:mx-8 my-8 sm:my-10 lg:my-12" />

            {/* ========== SHOP BY CATEGORY SECTION ========== */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        Shop By Category
                    </h1>
                    <Link to="/products">
                        <button className="bg-purple-500 hover:bg-purple-600 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap">
                            ALL PRODUCTS
                        </button>
                    </Link>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    
                    {/* Computer & Tablets */}
                    <div className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                            <img 
                                src={Tablet} 
                                alt="Tablets" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <Link to="/computer">
                            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl underline hover:text-purple-400 transition-colors cursor-pointer">
                                Computer & Tablets
                            </p>
                        </Link>
                    </div>

                    {/* Cell Phones */}
                    <div className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                            <img 
                                src={Mobiles} 
                                alt="Cell Phones" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <Link to="/cellphones">
                            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl underline hover:text-purple-400 transition-colors cursor-pointer">
                                Cell Phones
                            </p>
                        </Link>
                    </div>

                    {/* Accessories */}
                    <div className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                            <img 
                                src={watch} 
                                alt="Accessories" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <Link to="/accessories">
                            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl underline hover:text-purple-400 transition-colors cursor-pointer">
                                Accessories
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <hr className="border-white/30 mx-4 sm:mx-6 lg:mx-8 my-12 sm:my-16 lg:my-20" />

            {/* ========== BRANDS SECTION ========== */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 lg:mb-12">
                    Brands
                </h1>
                <div className="w-full flex justify-center">
                    <img 
                        src={Logo} 
                        alt="Brand Logos" 
                        className="max-w-full h-auto"
                    />
                </div>
            </section>

            {/* Divider */}
            <hr className="border-white/30 mx-4 sm:mx-6 lg:mx-8 my-12 sm:my-16 lg:my-20" />

            {/* ========== NEW ARRIVALS SECTION ========== */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
                    <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                        New Arrivals
                    </h1>
                    <Link to="/newin">
                        <button className="bg-purple-500 hover:bg-purple-600 px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-md text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap">
                            ALL PRODUCTS
                        </button>
                    </Link>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    
                    {/* Product 1 - Camera */}
                    <div className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                            <img 
                                src={Camera} 
                                alt="Instant Camera" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            <div className="absolute top-3 left-3">
                                <span className="bg-[#2d0a5f] text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg">
                                    Best Seller
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 sm:mt-4">
                            <h2 className="text-base sm:text-lg md:text-xl font-medium">
                                Instant Camera
                            </h2>
                            <p className="text-sm sm:text-base text-gray-300 mt-1">
                                $100.00
                            </p>
                        </div>
                    </div>

                    {/* Product 2 - Headphones */}
                    <div className="group">
                        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
                            <img 
                                src={Headphones} 
                                alt="Tonx Headphones" 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                        </div>
                        <div className="mt-3 sm:mt-4">
                            <h2 className="text-base sm:text-lg md:text-xl font-medium">
                                Tonx Headphones
                            </h2>
                            <p className="text-sm sm:text-base text-gray-300 mt-1">
                                $100.00
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== NEWSLETTER SECTION ========== */}
            <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-16 sm:my-20 lg:my-24">
                <div className="bg-purple-300/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/20">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        
                        {/* Left - Text Content */}
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                                Unlock Exclusive Deals
                            </h2>
                            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl">
                                Sign up for our newsletter and enjoy unmatched discounts, early access to sales, and insider tips!
                            </p>
                        </div>

                        {/* Right - Form */}
                        <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                            <div className="space-y-5">
                                
                                {/* Email Input */}
                                <div>
                                    <label className="block text-white text-base sm:text-lg md:text-xl mb-2">
                                        Enter Your Email *
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full bg-transparent border-b-2 border-white/50 focus:border-white py-2 px-1 text-white placeholder:text-white/40 outline-none transition-colors text-sm sm:text-base"
                                        value={email}
                                        onChange={handleEmail}
                                        onBlur={handleLeave}
                                    />
                                    {error && (
                                        <p className="text-red-400 text-xs sm:text-sm mt-2">
                                            Please enter a valid email address like example@mysite.com
                                        </p>
                                    )}
                                </div>

                                {/* Checkbox */}
                                <label className="flex items-start gap-3 text-white/90 text-sm sm:text-base cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheck}
                                        className="mt-0.5 w-4 h-4 accent-purple-500"
                                    />
                                    <span>Yes, subscribe me to your newsletter.</span>
                                </label>

                                {/* Submit Button */}
                                <button
                                    onClick={() => {
                                        if (email && isChecked) {
                                            alert('Thank you for subscribing!');
                                            setEmail('');
                                            setIsChecked(false);
                                        }
                                    }}
                                    disabled={!email || !isChecked}
                                    className="w-full sm:w-auto bg-white hover:bg-gray-200 disabled:bg-gray-500 disabled:cursor-not-allowed text-black font-medium px-8 py-2.5 sm:py-3 rounded-md text-sm sm:text-base transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Divider */}
            <hr className="border-white/30 mx-4 sm:mx-6 lg:mx-8 mb-8" />
        </div>
    );
}