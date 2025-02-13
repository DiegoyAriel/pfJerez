import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import "./style/layout.css"

function NavBar() {
  return (
    <nav>
        <ul className="menu">
            <li>
                <Link to={"items"}className="link">Productos</Link>
            </li>
            <li>
                <Link to={"/"} className="logo">Maltese Corner</Link>
            </li>
            
            <li>
                <Link to={"cart"} className="carrito"><CartWidget/></Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar