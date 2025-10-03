import { createContext } from "react";

export const CartContext = createContext({
    onAddingAnItemToCart : ()=>{},
    onRemovingAnItemFromCart : ()=>{},
    allCartItems: []
})