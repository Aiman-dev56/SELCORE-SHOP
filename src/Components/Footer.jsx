import { FaFacebook, FaInstagramSquare, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
    return(
        <div className="p-5 mt-10 mb-5 ">
           <div className="  flex just gap-3 md:items-end md:justify-end mt-20 m-10 md:5">
                <h1 className="text-lg">Reach Us At </h1>
                <FaWhatsapp size={30}  className="md:mt-2"/>

            </div>
            <hr mt-5 />
          

          
            <div className=" grid grid-cols-1 md:grid-cols-4 mt-20 gap-30 m-8">
                <div className="flex flex-col lg:flex-row gap-5">
                    <div>
                        <h1 className="text-[18px] md:flex md:flex-col text-gray-400">Menu</h1>

                    </div>
                    <div className="flex  flex-col ">
                      <ul className="text-[18px] font-[Time-New-Romans] w-40">
                        <li className="mb-1">New In</li>
                        <li className="mb-1">Cell Phones</li>
                        <li className="mb-1">Computer & Tablets</li>
                        <li className="mb-1">Accessories</li>
                        <li className="mb-1">Sale</li>
                        <li className="mb-1">Contact</li>
                      </ul>
                        </div>

                </div>

                 <div className="flex flex-col lg:flex-row gap-5">
                    <div>
                        <h1 className="text-[18px] text-gray-400">Policy</h1>

                    </div>
                    <div className="flex flex-col">
                      <ul className="text-[18px] font-[Time-New-Romans] w-40">
                        <li className="mb-1">Terms & Conditions</li>
                        <li className="mb-1">Privacy Policy</li>
                        <li className="mb-1">Shipping Policy</li>
                        <li className="mb-1">Refund Policy</li>
                        <li className="mb-1">Accessibility Statement</li>
                        
                      </ul>
                        </div>

                </div>

                 <div className="flex flex-col lg:flex-row gap-5">
                    <div>
                        <h1 className="text-[18px] text-gray-400">Info</h1>

                    </div>
                    <div className="flex flex-col ">
                      <ul className="text-[18px] font-[Time-New-Romans] w-40">
                        <li className="cursor-pointer mb-1">info@mysite.com</li>
                        <li className="mb-1">123-456-7890</li>
                        <li className="w-36 mb-1">500 Terry Francois Street ​San Francisco, CA 94158</li>
                        
                      </ul> 
                        </div>
                        <div className="flex  lg:flex-row gap-3 lg:ml-30">
                            <FaFacebook size={30} className="cursor-pointer" />
                            <FaTiktok size={30} className="cursor-pointer" />
                            <FaTwitter size={30} className="cursor-pointer" />
                            <FaInstagramSquare size={30} className="cursor-pointer" />

                        </div>

                </div>

            </div>

        </div>
    )
}