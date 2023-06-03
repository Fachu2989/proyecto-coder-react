import './CartItem.css'
import { useContext } from "react"
import  CartContext from "../../context/CartContext.jsx"

export const CartItem = ({nombre,precio,stock,id}) => {
    const {removeItem}=useContext(CartContext)
  
    return (
        <div>
            <section>
                <h4 className='InfoCart'>{nombre}</h4>
                <h4 className='InfoCart'>Precio por unidad: $ <strong>{precio}</strong> </h4>
                <h4 className='InfoCart'>Cantidad: <strong>{stock}</strong> </h4>

                <button onClick={()=>removeItem(id)} className='button-82-pushable'>
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                        Eliminar Producto
                    </span>
                </button>
            </section>
        </div>
  )
}
