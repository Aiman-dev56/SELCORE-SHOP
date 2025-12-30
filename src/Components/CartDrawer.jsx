import { FaTimes, FaTrash } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

export default function CartDrawer({ isOpen, isClose }) {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div
      className={`fixed top-0 right-0 w-[350px] h-screen bg-gray-600 shadow-lg z-50
      transform transition-transform duration-300 flex flex-col
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex flex-shrink-0 justify-between items-center p-4 border-b">
        <h1 className="text-white font-semibold">
          Your Cart ({totalItems})
        </h1>
        <FaTimes className="cursor-pointer text-white" onClick={isClose} />
      </div>

      {/* Cart Items */}
      <div className="p-4 flex flex-col gap-4 h-[calc(100%-120px)] overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-300">Your Cart Is Empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1 text-white">
                <h4 className="font-semibold">{item.name}</h4>
                <p>${item.price}</p>

                <div className="flex items-center justify-between gap-3 mt-1 border border-rounded w-20">
                  <button
                    className="px-2 py-1 cursor-pointer "
                    onClick={() =>
                      updateQuantity(item.id, item.qty > 1 ? item.qty - 1 : 1)
                    }
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="px-2 py-1 cursor-pointer "
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                  >
                    +
                  </button>
                  <div>
                     <p className="text-white font-semibold text-sm">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                    
                  </div>
                </div>
              </div>

              <button
                className="  font-bold cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-4  border-t">
            <div className="flex justify-between ">
                <h2 className="font-bold text-lg">Estimated Total:</h2>
                <p className="font-bold text-lg text-white">
            
             ${totalPrice.toFixed(2)}
          </p>
            </div>
            <h4 className="text-[16px] text-purple-800">Taxes and shippings are calculated at checkout.</h4>
          
          <button className="w-full bg-purple-500 py-2 rounded mt-2 text-white">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}
