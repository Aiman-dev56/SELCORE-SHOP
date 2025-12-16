import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {

    const [products] = useState(
        [{
            id: 1,
            name: "Tonex Headphones",
            price: "100.00",
            image: "/src/assets/headphones.jpg",
            category: "accessories",
            isBestSeller: false,


        },
        {
            id: 2,
            name: "Instant Camera",
            price: "100.00",
            image: "/src/assets/camera.jpg",
            category: "accessories",
            isBestSeller: true,
        },
        {
           id: 3,
            name: "Portable Speaker",
            price: "$50.00",
            image: "/src/assets/speaker2.png",
            category: "accessories",
            isBestSeller: false,
        },
        {
            id: 4,
            name: "Quantum 4 LR",
            price: "$450.00",
            image: "/src/assets/mob4.png",
            category: "CellPhones",
            isBestSeller: false,
        },
        {
            id: 5,
            name: "Quantum 5 Pro",
            price: "$500.00",
            image: "/src/assets/mob4.png",
            category: "CellPhones",
            isBestSeller: false,
        },
        {
            id: 6,
            name: "Quantum 6 Pro",
            price: "$500.00",
            image: "/src/assets/mob3.png",
            category: "CellPhones",
            isBestSeller: false,
        },
        {
            id: 7,
            name: "Hyper 14",
            price: "$520.00",
            image: "/src/assets/mob2.png",
            category: "CellPhones",
            isBestSeller: false,
        },
        {
            id: 8,
            name: "Hyper 15",
            price: "$700.00",
            image: "/src/assets/mob1.png",
            category: "CellPhones",
            isBestSeller: false,
        },
        {
            id: 9,
            name: "Laptop",
            price: "$320.00",
            image: "/src/assets/laptop2.png",
            category: "computers",
            isBestSeller: false,
        },
        {
            id: 10,
            name: "Laptop",
            price: "$450.00",
            image: "/src/assets/laptop1.png",
            category: "computers",
            isBestSeller: false,
        },
        {
            id: 11,
            name: "Laptop",
            price: "$280.00",
            image: "/src/assets/tablet.png",
            category: "computers",
            isBestSeller: false,
        },
        {
            id: 12,
            name: "Desktop Monitor",
            price: "$450.00",
            image: "/src/assets/pc1.png",
            category: "computers",
            isBestSeller: false,
        },
        {
            id: 13,
            name: "Wireless Mouse",
            price: "$50.00",
            image: "/src/assets/mouse.png",
            category: "accessories",
            isBestSeller: true,
        },
        {
            id: 14,
            name: "Fitness Tracker",
            price: "$75.00",
            image: "/src/assets/watch2.png",
            category: "accessories",
            isBestSeller: true,
        },
        {
            id: 15,
            name: "Wireless earbuds",
            price: "$100.00",
            image: "/src/assets/earpods2.png",
            category: "accessories",
            isBestSeller: true,
        },
        {
            id: 16,
            name: "Smart Home Camera",
            price: "$75.00",
            image: "/src/assets/camera2.png",
            category: "accessories",
            isBestSeller: true,
        },

        ]);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const context = useContext(ProductsContext);
    if(!context) throw new Error("useProducts must be used inside <ProductsProvider>");
    return context;
}