import { Link } from "react-router-dom"
import './Item.css'


export const Item = ({id, nombre,imagen,precio,stock}) => {
  return (
<div>
        <section className="CardItem">
            <picture>
                <img src={imagen} alt={nombre} className="ItemImg" />
            </picture>
            <div className="ContenedorInfo">
                <div>
                    <h2 className="NombreProducto">
                        {nombre}
                    </h2>
                    <p className='Info'>
                        Precio=$ <strong>{precio}</strong> 
                    </p>
                    <p className="Info">
                        Stock Disponible=<strong>{stock}</strong> 
                    </p>
                </div>
                <div className="ItemDetalle">
                    <Link to={`/item/${id}`}><button className="button-3">Ver Detalle</button></Link>
                </div>
            </div>
            
        </section>
    </div>
  )
}
