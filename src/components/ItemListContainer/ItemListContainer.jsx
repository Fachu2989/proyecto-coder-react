import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"

import { useParams } from "react-router-dom"

import {getDocs,collection,query,where} from 'firebase/firestore'
import { db } from "../../services/firebase/firebaseConfig"

export const ItemListContainer = ({greeting}) => {
    const [listaproducto, setlistaProducto] = useState([])

    const { categoryId }=useParams()

    useEffect(()=>{

        const collectionRef = categoryId
            ? query(collection(db,'products'),where('categoria','==', categoryId))
            :collection(db,'products')
        
        getDocs(collectionRef)
            .then(response=>{
                const productsAdapted=response.docs.map(doc=>{
                    const data=doc.data()
                    return {id: doc.id , ...data}
                })
                setlistaProducto(productsAdapted)
            })
            .catch(error=>{
                console.error(error)
            })
    },[categoryId])

  return (
    <div>
        <h1>{greeting}</h1>
        <ItemList listaproducto={listaproducto}/>
    </div>
  )
}
