import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProductById } from "../../asyncMock"


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)

  useEffect(()=>{
    getProductById('4')
      .then(response=>{
        setProduct(response)
      })
      .catch(error=>{
        console.error(error)
      })
  },[])


  return (
    <div>
      <ItemDetail {...product}/>
    </div>
  )
}
