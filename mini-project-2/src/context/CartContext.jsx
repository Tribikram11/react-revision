import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){
    const[cart, setCart] = useState([])

    const addItems = (newItem) => {
        setCart((prevCart) => [...prevCart, newItem])
    }

    return (
        <>
            <CartContext.Provider value={{cart, addItems}}>
                {children}
            </CartContext.Provider>
        </>
    )
}





