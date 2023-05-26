import { ItemCount } from "../ItemCount/ItemCount"


export const ItemDetail = ({id,nombre,precio,categoria,imagen,stock,descripcion}) => {
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
                    Precio= {precio}
                </p>
                <p className="Info">
                    Stock Disponible={stock}
                </p>
                <p className="Info">
                    Detalle: {descripcion}
                </p>
                <h3>
                    categoria:{categoria}
                </h3>
            </div>
            <div className="ItemDetalle">
                <ItemCount inicial={1} stock={10} onAdd={(quantity)=> console.log('cantidad agregada',quantity)}/>  
            </div>
        </section>
    </div>
  )
}
