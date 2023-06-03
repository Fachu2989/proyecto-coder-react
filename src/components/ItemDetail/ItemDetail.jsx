import './ItemDetail.css'
import { useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../../context/CartContext"


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
            <header>
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <section>
                <div>
                    <p className='InfoDetail'>Precio</p>   
                    <p className='totales'>${precio}</p>
                </div>
                <div>
                    <p className='InfoDetail'>Stock Disponible</p>
                    <p className='totales'>{stock}</p>  
                </div>
                <p className="Descripcion">
                    {descripcion}
                </p>
            </section>
            <div className="ItemDetalle">
                {
                    quantityAdded>0?(
                        <div className='finalizar'>
                            <Link to={'/cart'}> 
                                <button className='button-3'>
                                    Terminar Compra
                                </button>
                            </Link>
                            <Link to={'/'}>
                                <button  className='button-3'>
                                    Seguir comprando
                                </button>
                            </Link>
                        </div>
                        
                        
                    ):(
                        <ItemCount inicial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </div>
        </section>
    </div>
  )
}
