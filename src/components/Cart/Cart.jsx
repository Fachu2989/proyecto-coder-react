import './Cart.css'
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

                <Link to='/'>
                    <button className='button-3'>
                        Productos
                    </button>
                    
                </Link>
            </div>
        )
    }

  return (
    <div>
        <h2 className='Catalogo'>Usted tiene en el carrito <strong>{totalQuantity()}</strong> </h2>
        <section className='Cart-container'>
            {cart.map(c=> <CartItem key={c.id} {...c}/>)}
        
            <h3 className='Total-Cart'>Total: {Total()}</h3>
        </section>


        <div className="Botones">
            <button onClick={()=>clearCart()} className='button-3'>
                Limpiar Carrito
            </button>
            <Link to='/checkout'>
                <button className="button-3">
                    Checkout
                </button>
            </Link>
            <Link to={'/'}>
                <button  className='button-3'>
                    Seguir comprando
                </button>
            </Link>
        </div>
        
    </div>
  )
}
