import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"



export const Cart = () => {
    const {cart, clearCart,totalQuantity,total}=useContext(CartContext)

    if(totalQuantity===0){
        return(
            <div>
                <h1>no hay item en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

  return (
    <div>
        {cart.map(c=> <CartItem key={c.id} {...c}/>)}
        <h3>Total: ${total}</h3>
        <button onClick={()=>clearCart()}>Limpiar Carrito</button>
        <Link to='/checout'>Checkout</Link>
    </div>
  )
}
