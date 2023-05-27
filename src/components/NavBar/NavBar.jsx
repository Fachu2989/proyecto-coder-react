
import { Link, NavLink } from "react-router-dom"
import { Cartwidget } from "../CartWidget/Cartwidget"


export const NavBar = () => {
  return (
    <nav className="navbar">
        
        <Link to='/'>
          <h3>Serigrafia fachu ecommerce</h3>
        </Link>
        <div className="categorias">
            <NavLink to={`/categoria/remeras`}>Remeras</NavLink>
            <NavLink to={`/categoria/buzos`}>Buzos</NavLink>
            <NavLink to={`/categoria/camisas`}>Camisas</NavLink>
        </div>
        <Cartwidget/>
    </nav>
  )
}
