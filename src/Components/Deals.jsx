import Laptop from "/public/images/laptop.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import Mobiles from "/public/images/mobiles.jpg";
import Tablet from "/public/images/tablet1.jpg";
import watch from "/public/images/watch.jpg";
import Logo from "/public/images/logos.png";
import Camera from "/public/images/camera.jpg";
import Headphones from "/public/images/headphones.jpg";



import { useEffect, useState } from "react";


export default function Deals() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleEmail = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value.trim() !== "")
            setError(false);
    };

    const handleLeave = () => {
        if (email.trim === "") {
            setError(true);
        }


    }


    const handleCheck = (e) => {
        setIsChecked(e.target.checked)
    }

    useEffect(() => {
        Aos.init({
            duration: "5000",
            once: "true"
        })
    })
    return (
        <div>
            <div
                className="h-auto flex justify-center items-center relative bg-gradient-to-r from-[#1f054e] to-[#0f0f0f]"
            >
                {/* IMAGE */}
                <img
                    src={Laptop}
                    alt="img"
                    className="w-[95%] rounded-md m-5"
                    data-aos="fade-in" data-aos-duration="8000"
                />

                {/* TEXT ON IMAGE */}
                <div className="absolute flex flex-col w-60 md:w-80 left-10 top-10 md:p-4 items-start text-white drop-shadow-lg">
                    <h1 className="font-bold text-[15px] md:text-[40px] w-80 p-1">Hottest Deals</h1>
                    <p className="text-[10px] md:text-[20px] p-1">Save up to $150 on selected laptop & tablet brands</p>
                    <button className="bg-white text-black text-[8px] px-10 py-1  rounded-sm mt-8 md:mt-50 cursor-pointer">View All</button>

                </div>




            </div>

            <hr className="border-white m-5 rounded-md" />

            <section className="m-5  justify-between mt-10  ">
                <div className="flex flex-wrap ">
                    <h1 className="text-white text-2xl md:text-4xl ">Shop By Category</h1>
                    <button className="bg-purple-500 px-10 text-[9px] md:text-[13px] rounded-sm  md:ml-180 ">ALL PRODUCTS</button>
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 ">
                    <div className="flex flex-col">

                       <div className="w-auto h-auto rounded-md overflow-hidden">
                            <div className="w-full h-full overflow-hidden">
                                <img src={Tablet} alt="" className="w-full h-full object-cover  transition-transform duration-500 
            hover:scale-110" />

                            </div>
                        </div>
                        <p className=" mt-1 p-1 underline text-2xl cursor-pointer">Computer&Tablets</p>
                    </div>
                    <div className="flex flex-col">

                         <div className="w-auto h-auto rounded-md overflow-hidden">
                            <div className="w-full h-full overflow-hidden">
                                <img src={Mobiles} alt="" className="w-full h-full object-cover  transition-transform duration-500 
            hover:scale-110" />

                            </div>
                        </div>
                        <p className="mt-1 p-1 text-2xl  underline cursor-pointer">Cell Phones</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="w-auto h-auto rounded-md overflow-hidden">
                            <div className="w-full h-full overflow-hidden">
                                <img src={watch} alt="" className="w-full h-full object-cover  transition-transform duration-500 
            hover:scale-110" />

                            </div>
                        </div>
                        
                        <p className="mt-1 p-1 underline text-2xl  cursor-pointer">Accessories</p> 
                    </div>

                </div>
                <hr className="border-white m-5 mt-20 mb-10" />
            </section>
            <section>

                <h1 className="text-white m-10 text-3xl md:text-4xl">Brands</h1>
                <div className=" mt-8 mb-10 w-full">

                    <div>
                        <img src={Logo} alt="" />
                    </div>

                </div>

                <hr className=" mt-20 m-10 border-white" />

            </section>
            <section className="m-5  justify-between mt-10">
               <div className="flex flex-wrap ">
                    <h1 className="text-white text-4xl md:text-4xl ">New Arrivals</h1>
                    <button className="bg-purple-500 px-10 text-[9px] md:text-[13px] rounded-sm  md:ml-200 ">ALL PRODUCTS</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                    <div className="flex flex-col">
                        <div className="w-auto h-auto relative rounded-md overflow-hidden">
                            <div className="w-full h-full overflow-hidden">
                                <img src={Camera} alt="" className="w-full h-full object-cover  transition-transform duration-500 hover:scale-110" />
                            </div>
                            <div className="absolute top-2 left-3 z-50">
                                <button className="text-[10px] md:text-[15px] md:px-5 rounded-lg px-3 text-white bg-[#2d0a5f]">Best Saller</button>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-[13px] md:text-[18px] mt-2">Instant Camera</h1>
                            <p className="text-[10px] md:text-[15px]">$100.00</p>

                        </div>
                    </div>


                    <div >
                        <div className="w-auto h-auto rounded-md overflow-hidden">
                            <div className="w-full h-full overflow-hidden">
                                <img src={Headphones} alt="" className="w-full h-full object-cover  transition-transform duration-500 
            hover:scale-110" />

                            </div>
                        </div>
                        <div>
                            <h1 className="text-[13px] md:text-[18px] mt-2">Tonx Headphones</h1>
                            <p className="text-[10px] md:text-[15px]">$100.00</p>
                        </div>
                    </div>



                </div>
            </section>

            <section className="h-90 mt-20">
                <div className="m-5 p-2 md:m-20 bg-purple-300/10 rounded-md grid grid-cols-1 md:grid-cols-2">
                    
                        <div className="flex flex-col m-3 md:m-8 w-[400px] md:w-[800px]" >
                            <h1 className="text-2xl md:text-4xl">Unlock Exclusive Deals</h1>
                            <p className="text-md w-60 md:w-110 md:text-[15px]  mt-1">Sign up for our newsletter and enjoy unmatched discounts, early access to sales, and insider tips!</p>

                        </div>

                    
                    <div className="m-10 flex items-center justify-center">
                        <div className="flex flex-col justify-center">
                            <label className="text-2xl">
                                Enter Your Email *
                            </label>
                            <input type="email"
                                placeholder=""
                                className="text-xs p-2 w-full border-0 bg-transparent border-b-2 border-white focus:outline-none "
                                value={email}
                                onChange={handleEmail}
                                
                                onBlur={handleLeave}
                            />
                            {error && (
                                <p className="text-red-500 text-[9px] p-2">Enter an email address like example@mysite.com.</p>
                            )

                            }

                            <label className="text-white mt-5 inline-flex gap-2 text-sm">
                                <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheck}
                                />
                                Yes, subscribe me to your newsletter.
                            </label>
                            <button className="text-xs bg-white hover:bg-gray-400 text-black w-30 cursor-pointer mt-2 rounded-sm p-1">Submit</button>

                        </div>
                    </div>



                </div>
            </section>
           

            <hr className="m-5 border-white"/>

        </div>

    );
}
