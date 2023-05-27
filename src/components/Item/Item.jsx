import { Link } from "react-router-dom"


export const Item = ({id, nombre,imagen,precio,stock}) => {
  return (
<div>
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
                    Precio=$ {precio}
                </p>
                <p className="Info">
                    Stock Disponible={stock}
                </p>
            </div>
            <div className="ItemDetalle">
                <Link to={`/item/${id}`}>Ver Detalle</Link>
            </div>
        </section>
    </div>
  )
}
