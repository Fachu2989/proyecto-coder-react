import carrito from "./assets/carrito.svg"
import "./assets/cartwidget.css"

export const Cartwidget = () => {
  return (
    <div>
        <img className='carrito' src={carrito}alt="cart-widget" />
        0
    </div>
  )
}
