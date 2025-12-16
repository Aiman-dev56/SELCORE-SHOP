// src/components/ProductsLayout.jsx
import { useState } from "react";
import ProductData from "../data.json";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";

export default function ProductsLayout({ categoryName, pageTitle }) {

    const [filterBestSeller, setFilterBestSeller] = useState(false);
    const [filterNewIn, setFilterNewIn] = useState(false);

    let filtered = ProductData;

    // Filter by category (optional)
    if (categoryName) {
        filtered = filtered.filter(item => item.category.includes(categoryName));
    }

    // Apply filters
    if (filterBestSeller) {
        filtered = filtered.filter(item => item.isBestSeller === true);
    }
    if (filterNewIn) {
        filtered = filtered.filter(item => item.isNewIn === true);
    }

    return (
        <div className="font-sans mt-24 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 px-6">

            {/* Left Sidebar */}
            <div className="hidden lg:flex flex-col gap-6">
                <div className="flex">
                    <h2 className="text-[14px] inline-flex  gap-3 font-semibold">Home <FaLessThan size={20} /> {pageTitle}</h2>
                </div>


                <ul className="flex flex-col gap-2">
                    <Link to="/allproducts" className="text-gray-400 hover:text-white">All Products</Link>
                    <Link to="/accessories" className="text-gray-400 hover:text-white">Accessories</Link>
                    <Link to="/computer" className="text-gray-400 hover:text-white">Computers</Link>
                    <Link to="/cellphones" className="text-gray-400 hover:text-white">Cell Phones</Link>
                    <Link to="/bestsellers" className="text-gray-400 hover:text-white">Best Sellers</Link>
                    <Link to="/newin" className="text-gray-400 hover:text-white">New In</Link>
                    <Link to="/sale" className="text-gray-400 hover:text-white">Sale</Link>
                </ul>

                <hr />

                <h3 className="font-bold">Filters</h3>

                <label className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={filterBestSeller}
                        onChange={() => setFilterBestSeller(!filterBestSeller)}
                    />
                    Best Sellers
                </label>

                <label className="flex gap-2">
                    <input
                        type="checkbox"
                        checked={filterNewIn}
                        onChange={() => setFilterNewIn(!filterNewIn)}
                    />
                    New In
                </label>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filtered.map(product => (
                    
                            <Link key={product.id}
                    to={`/product/${product.id}`}
                    className="block">
                                <div className="w-auto h-100 rounded-md overflow-hidden">
                                    <div className="w-full h-full overflow-hidden">
                                    <img
                                    src={product.image}
                                    className="w-full h-full object-cover  transition-transform duration-500 
                    hover:scale-110"
                                    alt=""
                                />


                                </div>
                                </div>


                                <h3 className="mt-2 font-semibold">{product.name}</h3>
                                <p>${product.price}</p>
                            </Link>
                ))}
            </div>
        </div>
    );
}
