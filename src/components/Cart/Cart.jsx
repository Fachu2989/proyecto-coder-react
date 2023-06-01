import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartItem } from "../CartItem/CartItem"
import CartContext from "../../context/CartContext"


export const Cart = () => {
    const {cart, clearCart,totalQuantity,Total}=useContext(CartContext)
    console.log(Total())
    console.log(totalQuantity())

    if(totalQuantity()===0){
        return(
            <div>
                <h1>no hay item en el carrito</h1>

                <Link to='/'>Productos</Link>
            </div>
        )
    }

  return (
    <div>
        <h2>Usted tiene en el carrito {totalQuantity()} productos</h2>
        
        {cart.map(c=> <CartItem key={c.id} {...c}/>)}

        <h3>Total: {Total()}</h3>

        <button onClick={()=>clearCart()}>Limpiar Carrito</button>
        <Link to='/checkout'>Checkout</Link>
    </div>
  )
}
