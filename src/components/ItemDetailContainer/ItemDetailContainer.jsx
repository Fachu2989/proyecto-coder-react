import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"




export const ItemDetailContainer = () => {
  const [detalleproduct, setdetalleProduct] = useState(null)

  const { itemId } =useParams();

  useEffect(()=>{
    const docRef =doc(db,'products',itemId)

    getDoc(docRef)
      .then(response=>{
        const data =response.data()
        const productAdapted={id: response.id, ...data}
        setdetalleProduct(productAdapted)
      })
      .catch(error=>{
        console.error(error)
      })
  },[itemId])



  return (
    <div>
      <ItemDetail {...detalleproduct}/>
    </div>
  )
}
