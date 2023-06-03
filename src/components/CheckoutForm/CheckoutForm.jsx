import './CheckoutForm.css'
import { useState } from "react"


export const CheckoutForm = ({onConfirm}) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm=(event)=>{
    event.preventDefault()

    const userData={
      name,phone,email
    }

    onConfirm(userData)
  }

  return (

    <div>
      <div class="login-box">
      
      <form onSubmit={handleConfirm}>
        <div class="user-box">
          <input type="text" value={name} onChange={({target})=>setName(target.value)} />
          <label>Nombre</label>
        </div>
        <div class="user-box">
          <input type='telefono' value={phone} onChange={({target})=>setPhone(target.value)} />
          <label>Telefono</label>
        </div>
        <div class="user-box">
          <input type="text" value={email} onChange={({target})=>setEmail(target.value)} />
          <label>Email</label>
        </div>
        <center>
        <button type="submit">
          Crear Orden
            <span></span>
        </button></center>
      </form>
      </div>

    </div>
    
  )
}
