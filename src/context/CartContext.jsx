import { createContext, useState } from "react";

const CartContext=createContext({
    cart:[]
})

export const CartProvider=({children})=>{
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem=(item,stock)=>{
        if(!isInCart(item.id)){
            setCart(prev=>[...prev,{...item,stock}])
        }else{
            console.error('el producto ya fue agregado')
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

    const totalQuantity=()=>{
        return cart.reduce((acc,prod)=>(acc+=prod.stock),0)
    }

    const Total=()=>{
        return cart.reduce((acc, prod)=>(acc += prod.precio*prod.stock),0)
    }

    return (
        <CartContext.Provider value ={{cart,addItem,removeItem,Total,totalQuantity,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext