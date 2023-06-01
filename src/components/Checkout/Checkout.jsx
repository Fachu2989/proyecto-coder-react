
// import React, { useState, useContext } from 'react';
// import { collection, query, where, getDocs, writeBatch, documentId} from 'firebase/firestore';
// import {db} from '../../services/firebase/firebaseConfig'
// import { CheckoutForm } from '../CheckoutForm/CheckoutForm.jsx';
// import { Link } from 'react-router-dom';
// import  CartContext  from '../../context/CartContext.jsx';


// export const Checkout = () => {
//     const [orderId, setOrderId] = useState('');

//     const { cart, clearCart } = useContext(CartContext);

//     const createOrder = async ({Email, EmailConfirm }) => {
//         if (Email !== EmailConfirm) {
//             alert("los email's no coinciden")
//             return;
//         }

//         try{
//             const batch = writeBatch(db);
//             const outOfStock = [];
//             const ids = cart.map((prod) => prod.id);
//             const productsRef = collection(db, 'Products');

//             const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))); 

//             const { docs } = productsAddedFromFirestore;

//             docs.forEach((doc) => {
//                 const dataDoc = doc.data();
//                 const stockDb = dataDoc.stock;

//                 const productAddedToCart = cart.find((prod) => prod.id === doc.id);
//                 const prodQuantity = productAddedToCart?.quantity;

//                 if (stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity });
//                 } else {
//                     outOfStock.push({ id: doc.id, ...dataDoc });
//                 }
//             });

//             if (outOfStock.length === 0) {
//                 await batch.commit();

//                 const randomId = Math.random().toString(36).substring(7); 

//                 setOrderId(randomId);
//                 clearCart();     
                
//             } else {
//                 console.error('There are products that are out of stock');
//             }
//         } catch (error) {
//             console.log(error);
//         }

//     };

//     if (orderId) {
//         return (
//         <div className='ContainerId'>
//             <h1 className='ContainerId__order'>The id order is: {orderId}</h1>
//             <Link to="/" className='ContainerId__Back'>Back to top</Link>
//         </div>
//         );
//     }

//     return (
//         <>
//             <div className='ContainerAbsolute'>
//                 <h1 className='CheckoutTittle'> Checkout </h1>
//                 <CheckoutForm onConfirm={createOrder}/>
//             </div>
//         </>
//     )
// }


import React, { useState, useContext } from 'react';
import { collection, query, where, getDocs, writeBatch, documentId, Timestamp, addDoc} from 'firebase/firestore';
import {db} from '../../services/firebase/firebaseConfig'
import { CheckoutForm } from '../CheckoutForm/CheckoutForm.jsx';
import  CartContext  from '../../context/CartContext.jsx';

export const Checkout = () => {
    const [orderId, setOrderId] = useState('');

    const { cart, clearCart, } = useContext(CartContext);

    const createOrder = async ({name, phone, email }) => {
        try{
            const objOrder={
                buyer:{
                    name,phone,email
                },
            
                items:cart,
                date:Timestamp.fromDate(new Date())
            }
        
            const batch=writeBatch(db)
            const outOfStock=[]
            const ids= cart.map(prod=>prod.id)
            const ProductsRef=collection(db,'products')
            const ProductsAddedFromFirestone= await getDocs(query(ProductsRef,where(documentId(),'in',ids)))
            const {docs}=ProductsAddedFromFirestone

            docs.forEach(doc=>{
                const dataDoc=doc.data()
                const stockDb=dataDoc.stock

                const productAddedToCart=cart.find(prod=>prod.id===doc.id)
                const prodQuantity=productAddedToCart?.quantity

                if(stockDb>=prodQuantity){
                    batch.update(doc.ref,{stock:stockDb-prodQuantity})
                }else{
                    outOfStock.push({id:doc.id, ...dataDoc})
                }
            })
            
            if(outOfStock.length===0){
                await batch.commit()

                const orderRef=collection(db,'orders')

                const orderAdded= await addDoc(orderRef,objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('hay productos que estan fuera de stock')
            }
        }catch(error){
            console.log(error)
        }
    }
    if(orderId){
        return <h1>El id de su orden es:{orderId}</h1>
    }
    return(
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}