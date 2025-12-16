import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductData from "../data.json";
import { useCart } from "../Context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Item added to cart!");
  };

  return (
    <div className="mt-20 p-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10">
      <img
        src={product.thumbnail || product.image || product.images?.[0]}
        alt={product.title || product.name}
        className="w-full h-96 object-cover rounded-md"
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

        <button
          onClick={handleAddToCart}
          className="bg-purple-400 text-black px-6 py-3 rounded mt-4 hover:bg-purple-500"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
