
import { Link, NavLink } from "react-router-dom"
import { Cartwidget } from "../CartWidget/Cartwidget"


export const NavBar = () => {
  return (
    <nav className="navbar">
        
        <Link to='/'>
          <h3>Serigrafia fachu ecommerce</h3>
        </Link>
        <div className="categorias">
            <NavLink to={`/categoria/Remeras`}>Remeras</NavLink>
            <NavLink to={`/categoria/Buzos`}>Buzos</NavLink>
            <NavLink to={`/categoria/Camisas`}>Camisas</NavLink>
        </div>
        <Cartwidget/>
    </nav>
  )
}
