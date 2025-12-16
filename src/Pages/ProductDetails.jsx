import { useParams } from "react-router-dom";
import ProductData from "../data.json";
import { useState } from "react";
import Footer from "../Components/Footer";
import { useCart } from "../Context/CartContext";

export default function ProductsDetails(){
    const {addToCart} = useCart();
    const { id } = useParams();
    const product = ProductData.find(p => p.id === Number(id));

    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    const [open, setIsOpen] = useState("info");
    const [quantity, setQuantity] = useState(1);
    const [imageError, setImageError] = useState(false);

    if(!product) {
        return (
            <div className="mt-32 px-6 text-center">
                <h2 className="text-2xl font-semibold">Product Not Found</h2>
                <p className="mt-4">The product you're looking for doesn't exist.</p>
            </div>
        );
    }

    const toggleSection = (section) => {
        setIsOpen(open === section ? null : section);
    }

    // Handle image loading errors
    const handleImageError = () => {
        setImageError(true);
        console.error('Image failed to load:', product.image);
    };

    return(
        <div>
            <div className="mt-32 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">

            <div>
                {imageError ? (
                    <div className="w-full h-[400px] bg-gray-200 rounded flex items-center justify-center">
                        <div className="text-center">
                            <p className="text-gray-500">Image not available</p>
                            <p className="text-sm text-gray-400 mt-2">Path: {product.image}</p>
                        </div>
                    </div>
                ) : (
                    <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-[400px] object-cover rounded"
                        onError={handleImageError}
                    />
                )}
            </div>

            <div>
                <h1 className="text-2xl font-semibold">{product.name}</h1>
                <p className="mt-2 text-[20px]">${product.price}</p>
                <p className="text-[15px] mt-2">{product.description}</p>

                <div className="flex items-center gap-4 mt-4">
                    <button 
                        onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} 
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                    > 
                        - 
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button 
                        onClick={() => setQuantity(quantity+1)}
                        className="px-4 py-2 border rounded hover:bg-gray-100"
                    >
                        +
                    </button>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                    <button 
                        className="bg-purple-400 text-black px-6 py-3 rounded cursor-pointer text-[15px] hover:bg-purple-500 transition" 
                        onClick={handleAddToCart}
                    >
                        Add To Cart
                    </button>

                    <button className="bg-gray-200 text-black px-6 cursor-pointer py-3 rounded text-[15px] hover:bg-gray-300 transition">
                        Buy Now
                    </button>
                </div>

                {showPopup && (
                    <div className="fixed top-20 right-10 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
                        ✅ Item added to cart
                    </div>
                )}

                <div className="mt-10 border-t">
                    <div className="border-b py-4">
                        <button 
                            onClick={() => toggleSection("info")}
                            className="w-full flex justify-between items-center text-2xl cursor-pointer"
                        >
                            <h3 className="font-semibold">PRODUCT INFO</h3>
                            {open === "info" ? "-" : "+"}
                        </button>
                        {open === "info" && (
                            <p className="mt-3 text-lg text-gray-400">
                                {product.info}
                            </p>
                        )}
                    </div>

                    <div className="border-b py-4">
                        <button 
                            onClick={() => toggleSection("return")}
                            className="w-full flex justify-between items-center text-2xl cursor-pointer"
                        >
                            <h3 className="font-semibold">RETURN & REFUND POLICY</h3>
                            {open === "return" ? "-" : "+"}
                        </button>
                        {open === "return" && (
                            <p className="mt-3 text-lg text-gray-400">
                                I'm a Return and Refund policy. I'm a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence. 
                            </p>
                        )}
                    </div>

                    <div className="border-b py-4">
                        <button 
                            onClick={() => toggleSection("shipping")}
                            className="w-full flex justify-between items-center text-2xl cursor-pointer"
                        >
                            <h3 className="font-semibold">SHIPPING INFO</h3>
                            {open === "shipping" ? "-" : "+"}
                        </button>
                        {open === "shipping" && (
                            <p className="mt-3 text-lg text-gray-400">
                                I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}