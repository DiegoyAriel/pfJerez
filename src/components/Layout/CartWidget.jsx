import cartIcon from "../../assets/carrito.png"
import { useCart } from "../../context/CartContext"

function CartWidget() {

  const {cartItems} =useCart()

  const totalItems =cartItems.reduce((total, item) =>total + item.cantidad, 0)
  return (
    <div className="carrito link">
        <img src={cartIcon} alt="Carrito" />
        {totalItems > 0 && <span>{totalItems}</span>}
    </div>
  )
}

export default CartWidget