import Image from '/public/images/speaker.png'
import { useState, useEffect } from 'react'
import axios from 'axios';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import ProductData from "../data.json";



export default function Products() {
    const [apiProducts, setApiProducts] = useState([]);
    const [combinedProducts, setCombinedProducts] = useState([]);
    const [visible, setVisible] = useState(4);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: "3000",
            once: "true"
        })
    }, [])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => setApiProducts(res.data.products))
            .catch(err => console.error("API Error:", err));
    }, []);

    // Merge API products and local JSON products
    useEffect(() => {
        const merged = [...apiProducts, ...ProductData];
        setCombinedProducts(merged);
    }, [apiProducts]);


    const handleToggle = () => {
        if (showAll) {
            setVisible(4);
            setShowAll(false);
        } else {
            setVisible(combinedProducts.length);
            setShowAll(true);
        }
    };


    return (
        <div>
            <div className="w-full h-[80vh] md:h-[60vh] p-6 grid  grid-cols-1 md:grid-cols-3 gap-4 " data-aos="fade-up">

                {/* LEFT SMALL BOX - 1 column */}
                <div className="col-span-1 bg-purple-300/20 rounded">
                    <div className=" text-white font-serif rounded-md w-full flex flex-col p-5">
                        <h1 className="text-2xl md:text-4xl">Top Deals</h1>
                        <h6 className="text-[18px] md:text-2xl mt-8">UP TO</h6>
                        <h3 className="text-[30px] md:text-6xl font-semibold">30% OFF</h3>
                        <h5 className="text-[10px] md:text-[15px] mt-2">SELECTED BREANDS</h5>
                        <a href="#" className="hover:underline mt-14"> Shop Now</a>

                    </div>
                </div>

                {/* RIGHT BIG BOX - 2 columns */}
                <div className="col-span-2 h-[40vh] md:h-[60vh] relative flex justify-between  bg-pink-300/10  overflow-hidden" >

                    {/* LEFT SIDE TEXT */}
                    <div className="flex flex-col p-5 z-10">
                        <h2 className=" font-semibold text-2xl md:text-4xl">
                            Our Staff Pick
                        </h2>

                        <h6 className=" text-[10px] md:text-[18px] mt-25 md:mt-42">
                            Tune into quality sound
                        </h6>
                        <a href="#" className="hover:underline mt-2 md:text-2xl"> Shop Now</a>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <img
                        src={Image}
                        alt="speaker"
                        className="h-[250px] md:h-[400px] object-contain absolute top-0 left-8 md:left-20 bottom-0"
                    />

                </div>
            </div>
            <hr className='border-white mt-30 m-5' />

            <section className='mt-10 m-10 text-2xl' data-aos="fade-up" data-aos-duration="4000">
                <div className='flex flex-wrap justify-between '>
                    <h1 className='text-4xl'>Best Sellers</h1>
                    <button className='bg-purple-400 px-20 md:mt-0 mt-2 rounded-lg text-sm cursor-pointer' onClick={handleToggle}>{showAll ? "Hide" : "View All"}</button>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
                    {combinedProducts.slice(0, visible).map(product => (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <div className="p-2 rounded-lg flex flex-col cursor-pointer transition">
                                <div className="w-auto h-60 bg-gray-300 rounded-md overflow-hidden">
                                    <div className="w-full h-full overflow-hidden">
                                        <img
                                            src={product.thumbnail || product.image || product.images?.[0]}
                                            alt={product.title || product.name}
                                            className="w-full h-full object-cover  transition-transform duration-500 
                    hover:scale-110"

                                        />


                                    </div>
                                </div>


                                <p className="mt-2 text-[18px]">{product.title || product.name}</p>
                                <p className="text-[15px]">${product.price}</p>
                            </div>
                        </Link>
                    ))}

                </div>


                <div className='m-10  font-bold' data-aos="fade-up" data-aos-duration="5000">
                    <h1 className='text-6xl'>Why Us</h1>
                </div>
                <div className='m-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-3' data-aos="fade-up" data-aos-duration="6000">

                    <div className='flex flex-col'>
                        <hr className='w-full border-white' />
                        <div className='flex p-2 mt-2 '>
                            <h4 className='text-[20px] md:text-[30px] font-semibold'>
                                Free shipping on
                                orders over $50</h4>

                        </div>

                    </div>
                    <div className="flex flex-col">
                        <hr className='w-full border-white' />
                        <div className='flex text-white p-2 mt-2'>
                            <h4 className='text-[20px] md:text-[30px] font-semibold '>Available to
                                you 24/7</h4>


                        </div>

                    </div>
                    <div className='flex flex-col'>
                        <hr className='w-full border-white' />
                        <div className='flex text-white p-2 mt-2'>
                            <h4 className='text-[20px]md:text-[30px] font-semibold '>Extended
                                Warranty Plans</h4>

                        </div>

                    </div>

                </div>


            </section>
        </div>









    )
}