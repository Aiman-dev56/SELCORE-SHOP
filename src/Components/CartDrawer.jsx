import { FaTimes } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

export default function CartDrawer({isOpen, isClose}) {
    const {cart, removeFromCart, updateQuantity, totalPrice} = useCart();

    return(
        <div className={`fixed top-0 right-0 w-[350px] h-full bg-gray-600 shadow-lg z-50 transform-transition duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"} `}>
            <div className="flex justify-between items-center p-4 border-b">
                <h1>Your Cart</h1>
                <FaTimes className="cursor-pointer" onClick={isClose} />
            </div>

            <div className="p-4 flex flex-col gap-4 h-[calc(100%-120px) overflow-y-auto]">
                { cart.length === 0 ? (
                    <p className="text-gray-300">Yor Cart Is Empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 border-b pb-2">
                            <img src={item.image} alt={item.name} 
                            className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p>${item.price}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <button className="px-2 py-1 border rounded cursor-pointer" onClick={() => updateQuantity(item.id, item.qty > 1 ? item.qty -1 : 1)}>
                                        -
                                    </button>
                                    <span>{item.qty}</span>
                                    <button className="px-2 py-1 border rounded cursor-pointer" onClick={() => updateQuantity(item.id, item.qty + 1)}>
                                        +
                                    </button>
                                </div>

                            </div>
                            <button className="text-red-300 font-bold text-2xl cursor-pointer" onClick={() => removeFromCart(item.id)}>x</button>
                        </div>
                    ))
                )}

            </div>
            {cart.length > 0 && (
                <div className="p-4 border-t">
                    <p className="font-bold text-lg">Total: ${totalPrice}</p>
                    <button className="w-full bg-purple-500 py-2 rounded mt-2">
                        CheckOut
                    </button>
                </div>
            )}

        </div>
    )
}