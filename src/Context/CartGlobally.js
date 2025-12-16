import { useState } from "react";

export default function CartGlobally(){
    const [open, setIsOpen] = useState(false);

   const toggleCart = () => {
    if(window.innerWidth < 786){
        window.location.href = "../assets/Pages/Cart.jsx"
    } else {
        setIsOpen(true)
    }
   }
    return {open , toggleCart, setIsOpen}
}