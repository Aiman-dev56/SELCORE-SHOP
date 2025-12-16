// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ProductData from "../data.json";
// import { useCart } from "../Context/CartContext";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   useEffect(() => {
//     // Try to find in local JSON first
//     const localProduct = ProductData.find(p => p.id === Number(id));
//     if (localProduct) {
//       setProduct(localProduct);
//     } else {
//       // Fallback to API if not in JSON
//       axios.get(`https://dummyjson.com/products/${id}`)
//         .then(res => setProduct(res.data))
//         .catch(err => console.error("Product fetch error:", err));
//     }
//   }, [id]);

//   if (!product) return <p className="mt-32 text-center text-white">Loading...</p>;


//   const toggleSection = (section) => setOpen(open === section ? null : section);
//   const handleAddToCart = () => {
//     addToCart(product, quantity);
//     setShowPopup(true);
//     setTimeout(() => setShowPopup(false), 2000);
//   };


//   return (
//     <div className="mt-20 p-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
//       <img
//         src={product.thumbnail || product.image || product.images?.[0]}
//         alt={product.title || product.name}
//         className="w-full h-96 object-cover bg-gray-300 rounded-md"
//       />
//       <div>
//         <h1 className="text-2xl font-semibold">{product.title || product.name}</h1>
//         <p className="mt-2 text-[20px]">${product.price}</p>
//         <p className="text-[15px] mt-2">{product.description || product.info}</p>

//         <div className="flex gap-2 mt-4">
//           <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 py-2 border rounded">-</button>
//           <span className="text-lg">{quantity}</span>
//           <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border rounded">+</button>
//         </div>
//         <div className="flex flex-col">
//           <button
//             onClick={handleAddToCart}
//             className="bg-purple-400 text-black px-6 py-3 rounded mt-4 hover:bg-gray-500"
//           >
//             Add To Cart
//           </button>
//           <button
//             onClick={handleAddToCart}
//             className="bg-gray-300 text-black px-6 py-3 rounded mt-4 hover:bg-purple-500"
//           >
//             Buy Now
//           </button>
//         </div>
//         {showPopup &&
//           (<div className="fixed top-20 right-10 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
//             ✅ Item added to cart
//           </div>)}
//         {/* Accordion */}
//         <div className="mt-10 border-t">
//           <div className="border-b py-4">
//             <button onClick={() => toggleSection("info")}
//               className="w-full flex justify-between items-center text-2xl cursor-pointer" >
//               <h3 className="font-semibold">PRODUCT INFO</h3>
//               {open === "info" ? "-" : "+"} </button> {open === "info" && (
//                 <p className="mt-3 text-lg text-gray-400">{product.description}</p>)}
//           </div>
//           <div className="border-b py-4">
//             <button onClick={() => toggleSection("return")} className="w-full flex justify-between items-center text-2xl cursor-pointer" >
//               <h3 className="font-semibold">RETURN & REFUND POLICY</h3>
//               {open === "return" ? "-" : "+"} </button>
//             {open === "return" && (
//               <p className="mt-3 text-lg text-gray-400"> Simple return and refund policy text here. </p>)}
//           </div>
//           <div className="border-b py-4">
//             <button onClick={() => toggleSection("shipping")} className="w-full flex justify-between items-center text-2xl cursor-pointer" >
//               <h3 className="font-semibold">SHIPPING INFO</h3>
//               {open === "shipping" ? "-" : "+"}
//             </button>
//             {open === "shipping" && (
//               <p className="mt-3 text-lg text-gray-400"> Shipping policy text goes here. </p>)}
//           </div>
//         </div>
//       </div>
//     </div>



//   );
// }
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductData from "../data.json";
import { useCart } from "../Context/CartContext";
import Footer from "../Components/Footer"

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState("info");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Try to find in local JSON first
    const localProduct = ProductData.find(p => p.id === Number(id));
    if (localProduct) {
      setProduct(localProduct);
    } else {
      // Fallback to API if not in JSON
      axios.get(`https://dummyjson.com/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(err => console.error("Product fetch error:", err));
    }
  }, [id]);

  if (!product) return <p className="mt-32 text-center text-white">Loading...</p>;

  const toggleSection = (section) => setOpen(open === section ? null : section);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div>
       <div className="mt-20 p-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
      <img
        src={product.thumbnail || product.image || product.images?.[0]}
        alt={product.title || product.name}
        className="w-200 h-130 object-cover bg-gray-300 rounded-md"
      />
      <div>
        <h1 className="text-2xl font-semibold">{product.title || product.name}</h1>
        <p className="mt-2 text-[20px]">${product.price}</p>
        <p className="text-[15px] mt-2">{product.description || product.info}</p>

        <div className="flex gap-2 mt-4">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} className="px-4 py-2 border rounded">-</button>
          <span className="text-lg">{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 border rounded">+</button>
        </div>

        <div className="flex flex-col mt-4 gap-2">
          <button onClick={handleAddToCart} className="bg-purple-400 text-black px-6 py-3 rounded hover:bg-gray-500">Add To Cart</button>
          <button onClick={handleAddToCart} className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-purple-500">Buy Now</button>
        </div>

        {showPopup && (
          <div className="fixed top-20 right-10 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50">
            ✅ Item added to cart
          </div>
        )}

        {/* Accordion */}
        <div className="mt-10 border-t">
          <div className="border-b py-4">
            <button onClick={() => toggleSection("info")} className="w-full flex justify-between items-center text-2xl cursor-pointer">
              <h3 className="font-semibold">PRODUCT INFO</h3>
              {open === "info" ? "-" : "+"}
            </button>
            {open === "info" && <p className="mt-3 text-lg text-gray-200">{product.description || product.info}</p>}
          </div>

          <div className="border-b py-4">
            <button onClick={() => toggleSection("return")} className="w-full flex justify-between items-center text-2xl cursor-pointer">
              <h3 className="font-semibold">RETURN & REFUND POLICY</h3>
              {open === "return" ? "-" : "+"}
            </button>
            {open === "return" && <p className="mt-3 text-lg text-gray-200">I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.</p>}
          </div>

          <div className="border-b py-4">
            <button onClick={() => toggleSection("shipping")} className="w-full flex justify-between items-center text-2xl cursor-pointer">
              <h3 className="font-semibold">SHIPPING INFO</h3>
              {open === "shipping" ? "-" : "+"}
            </button>
            {open === "shipping" && <p className="mt-3 text-lg text-gray-200">I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence.</p>}
          </div>
        </div>
      </div>
    </div>
    <Footer />

    
    </div>
   
  );
}
