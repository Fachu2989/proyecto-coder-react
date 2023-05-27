import { useContext } from "react"
import carrito from "./assets/carrito.svg"
import "./assets/cartwidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

export const Cartwidget = () => {
  const {totalQuantity}=useContext(CartContext)

  return (
    <div>
        <Link to='/cart' style={{display: totalQuantity>0?'block':'none'}}>
          <img className='carrito' src={carrito}alt="cart-widget" />
          {totalQuantity}
        </Link>
    </div>
  )
}
