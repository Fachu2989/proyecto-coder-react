
import { Cartwidget } from "../CartWidget/Cartwidget"


export const NavBar = () => {
  return (
    <nav className="navbar">
        <h3>Serigrafia fachu ecommerce</h3>
        <div className="categorias">

            <button>remeras</button>
            <button>buzos</button>
            <button>camisas</button>
            
        </div>
        <Cartwidget/>
    </nav>
  )
}
