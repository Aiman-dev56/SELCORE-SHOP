import { useCart } from "../Context/CartContext";

export default function Cart(){
    const {cart , removeFromCart, updateQuantity, totalPrice} = useCart();

    


    if(cart.length === 0){
        
        return<div className="mt-40 text-center">
            <h1>Crat is Empty</h1>
        </div>
    }

    return<div className="mt-32 px-6">
        <h1 className="text-2xl font-semibold">Your Cart</h1>
        {
            cart.map(item => (
                <div key={item.id} className="flex gap-5 border-b py-4">
                    <img src={item.image} className="w-24 h-24 object-cover" />

                    <div className="flex-1">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p>{item.price}</p>
                        <div className="flex items-center gap-3 mt-2">
                            <button onClick={() => updateQuantity(item.id, Math.max(1, item.qty - 1))}>
                                -
                            </button>
                            <span>{item.qty}</span>
                            <button onClick={() => updateQuantity(item.id, item.qty + 1)}>+</button>
                        </div>

                    </div>
                    <button onClick={() => removeFromCart(item.id)}
                        className="text-red-300 cursor-pointer">
                            Remove
                        </button>
                </div>
            ))
        }

        <h2 className="text-xl mt-6">
            Total: <strong>${totalPrice.toFixed(2)}</strong>
        </h2>

    </div>
}