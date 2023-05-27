import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartItem = ({nombre,precio,cantidad,id}) => {
    const {eliminarItem}=useContext(CartContext)
  
    return (
        <div>
            <section>
                <h4>{nombre}</h4>
                <h4>Precio por unidad: ${precio}</h4>
                <h4>{cantidad}</h4>
                <button onClick={()=>eliminarItem(id)}>Eliminar Producto</button>
            </section>
        </div>
  )
}
