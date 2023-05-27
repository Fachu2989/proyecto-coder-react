
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


export const ItemDetail = ({id,nombre,precio,categoria,imagen,stock,descripcion}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem}= useContext(CartContext)

    const handleOnAdd=(quantity)=>{
        setQuantityAdded(quantity)
    
    const item={
        id,nombre,precio
    }

    addItem(item,quantity)
        
    }
    
    

  return (
    <div key={id}>
        <section className="CardItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <div>
                <p className='Info'>
                    Precio= {precio}
                </p>
                <p className="Info">
                    Stock Disponible={stock}
                </p>
                <p className="Info">
                    Detalle: {descripcion}
                </p>
                <p>
                    {categoria}
                </p>
            </div>
            <div className="ItemDetalle">
                {
                    quantityAdded>0?(
                        <Link to={'/cart'}>Terminar compra</Link>
                    ):(
                        <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </section>
    </div>
  )
}
