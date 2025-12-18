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
            <div
  className="w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-4"
  data-aos="fade-up"
>
  {/* LEFT SMALL BOX */}
  <div className="bg-purple-300/20 rounded flex flex-col justify-between p-6 min-h-[350px] md:min-h-[350px] lg:min-h-[500px]">
    <div className="text-white font-serif">
      <h1 className="text-3xl lg:text-4xl">Top Deals</h1>

      <h6 className="text-lg mt-6">UP TO</h6>

      <h3 className="text-4xl lg:text-6xl font-semibold">30% OFF</h3>

      <h5 className="text-sm lg:text-xl mt-3">
        SELECTED BRANDS
      </h5>
    </div>

    <a href="#" className="hover:underline text-white mt-6">
      Shop Now
    </a>
  </div>

  {/* RIGHT BIG BOX */}
  <div className="relative bg-pink-300/10 rounded flex  p-8 min-h-[350px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden col-span-2">
    
    {/* TEXT */}
    <div className="z-10 text-white max-w-[80%]">
      <h2 className="font-semibold text-3xl lg:text-6xl">
        Our Staff Pick
      </h2>

      <p className="text-sm md:text-lg mt-50 lg:mt-80">
        Tune into quality sound
      </p>

      <a href="#" className="hover:underline mt-4 inline-block text-lg">
        Shop Now
      </a>
    </div>

    {/* IMAGE (BOTTOM-RIGHT ATTACHED) */}
    <img
      src={Image}
      alt="speaker"
      className="
        absolute bottom-0 right-0
        w-[70%]
        sm:w-[55%]
        md:w-[45%]
        lg:w-[40%]
        xl:w-[35%] 
        2xl:w-[30%]
        object-contain
        pointer-events-none
      "
    />
  </div>
</div>

            <hr className='border-white mt-30 m-5 md:mt-50' />

            <section className='mt-10 m-5 text-2xl' data-aos="fade-up" data-aos-duration="4000">
                <div className='flex flex-wrap justify-between '>
                    <h1 className='lg:text-4xl text-3xl md:text-2xl '>Best Sellers</h1>
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
                                            className="w-full h-full object-cover  transition-transform duration-500 hover:scale-110"
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