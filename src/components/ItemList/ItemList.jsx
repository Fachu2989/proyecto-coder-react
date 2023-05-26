import { Item } from "../Item/Item"
import './ItemList.css'

export const ItemList = ({products}) => {
  return (
    <div className="Grid">
        {products.map(prod=> <Item key={prod.id} {...prod}/>)}
    </div>
  )
}
