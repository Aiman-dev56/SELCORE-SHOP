import { FaHeart, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CartDrawer from "./CartDrawer";


export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    

    const openCart = () => {
        if (window.innerWidth < 768) {
            navigate("/cart");   // FIXED!
        } else {
            setDrawerOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setNavbarVisible(true);
            } else {
                setNavbarVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`w-full fixed top-0 left-0 flex h-20 p-5 justify-between items-center z-50 transition-all duration-300 
            ${navbarVisible ? "bg-purple-500/80 backdrop-blur-md" : "bg-transparent"}`}
        >
            {/* Logo */}
            <div className="font-extrabold text-white text-2xl">
                SELCORE
            </div>

            {/* Desktop Links */}
            <ul className="gap-5 text-lg text-white font-sans hidden md:flex">
                <Link to="/newin" className="hover:underline cursor-pointer">New In</Link>
                <Link to="/cellphones" className="hover:underline cursor-pointer">Cell Phones</Link>
                <Link to="/computer" className="hover:underline cursor-pointer">Computer & Tablets</Link>
                <Link to="/accessories" className="hover:underline cursor-pointer">Accessories</Link>
                <Link to="/sale" className="hover:underline cursor-pointer">Sale</Link>
                <Link to="/contact" className="hover:underline cursor-pointer">Contact</Link>

            </ul>

            {/* Icons */}
            <div className="flex gap-4 items-center">
                <FaHeart size={22} color="white" />
                <FaUser size={22} color="white" />
                <FaShoppingCart size={22} color="white" className="cursor-pointer" onClick={openCart} />

                {/* Cart Drawer for Desktop */}
                <CartDrawer isOpen={drawerOpen} isClose={() => setDrawerOpen(false)} />















                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <FaBars
                        size={25}
                        className="cursor-pointer text-white"
                        onClick={() => setOpenMenu(true)}
                    />
                </div>
            </div>
            {/* Mobile Fullscreen Menu */}
            <div
                className={`fixed inset-0 bg-black/90 flex flex-col items-center justify-center text-white
                    transition-transform duration-300 md:hidden
                    ${openMenu ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <FaTimes
                    size={30}
                    className="absolute top-6 left-6 cursor-pointer"
                    onClick={() => setOpenMenu(false)}
                />

                <ul className="text-center space-y-6 text-2xl font-semibold">
                    <Link to="/newin">New In</Link>


                    <li className="hover:text-purple-400 cursor-pointer">Cell Phones</li>
                    <li className="hover:text-purple-400 cursor-pointer">Computer & Tablets</li>
                    <li className="hover:text-purple-400 cursor-pointer">Accessories</li>
                    <li className="hover:text-purple-400 cursor-pointer">Sale</li>
                    <li className="hover:text-purple-400 cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    );
}
