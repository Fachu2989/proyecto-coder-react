import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({listaproducto}) => {
  return (
    <div className="Grid">
        {listaproducto.map(prod=> <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
