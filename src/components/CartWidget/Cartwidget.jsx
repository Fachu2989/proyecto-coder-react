import { useContext } from "react"
import carrito from "./assets/carrito.svg"
import "./assets/cartwidget.css"
import { Link } from "react-router-dom"
import CartContext from "../../context/CartContext"

export const Cartwidget = () => {
  const {totalQuantity}=useContext(CartContext)

  return (
    <div>
        <Link to='/cart'>
          <img className='carrito' src={carrito}alt="cart-widget" />
          <h3 className="cuentaCarrito">{totalQuantity()}</h3>
        </Link>
    </div>
  )
}
