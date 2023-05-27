import { createContext, useState } from "react";

export const CartContext=createContext({
    cart:[]
})

export const CartProvider=({children})=>{
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem=(item,quantity)=>{
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,quantity}])
        }else{
            console.error('el producro ya fue agregado')
        }
    }

    const removeItem=(ItemId)=>{
        const cartUpdated=cart.filter(prod=>prod.id!==ItemId)
        setCart(cartUpdated)
    }

    const clearCart=()=>{
        setCart([])
    }

    const isInCart=(itemId)=>{
        return cart.some(prod=>prod.id===itemId)
    }

    return (
        <CartContext.Provider value ={{cart,addItem,removeItem,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}
