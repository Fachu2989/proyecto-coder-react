import { useContext } from "react"
import  CartContext from "../../context/CartContext.jsx"

export const CartItem = ({nombre,precio,stock,id}) => {
    const {removeItem}=useContext(CartContext)
  
    return (
        <div>
            <section>
                
                <h4>{nombre}</h4>
                <h4>Precio por unidad: ${precio}</h4>
                <h4>Cantidad: {stock}</h4>
                <button onClick={()=>removeItem(id)}>Eliminar Producto</button>
            </section>
        </div>
  )
}
