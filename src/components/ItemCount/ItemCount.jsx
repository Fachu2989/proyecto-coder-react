import { useState } from "react"
import './ItemCount.css'


export const ItemCount = ({stock, inicial,onAdd}) => {
    const [quantity, setquantity] = useState(inicial)

    const incrementa=()=>{
        if(quantity<stock){
            setquantity(quantity+1)
        }
    }

    const decrementa=()=>{
        if (quantity>1){
            setquantity(quantity-1)
        }
    }

    return(
        <div className="counter">
            <div className="controls">
                <button className="button-12" onClick={decrementa}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="button-12" onClick={incrementa}>+</button>
            </div>
            <div>
                <button className="button-3" onClick={()=>onAdd(quantity)} disabled={!stock}>
                    Agregar Al Carrito
                </button>
            </div>
        </div>
    )
}
