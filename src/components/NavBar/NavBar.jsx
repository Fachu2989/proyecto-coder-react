import './NavBar.css'
import { Link, NavLink } from "react-router-dom"
import { Cartwidget } from "../CartWidget/Cartwidget"
import logo from'./assets/logo.svg'

export const NavBar = () => {
  return (
    <nav className="navbar">
        
        <Link to='/'>
          <img src= {logo}className='logo' alt="imagenlogo" />
        </Link>
        <div className="categorias">
            <NavLink  to={`/categoria/Remeras`}>
              <button className='button-77'>Remeras</button> 
            </NavLink>
            <NavLink to={`/categoria/Buzos`}>
              <button className='button-77'>Buzos</button>
            </NavLink>
            <NavLink to={`/categoria/Camisas`}>
              <button className='button-77'>Camisas</button>
            </NavLink>
        </div>
        <Cartwidget/>
    </nav>
  )
}
