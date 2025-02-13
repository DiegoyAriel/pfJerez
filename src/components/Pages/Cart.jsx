import Swal from "sweetalert2"
import {useCart} from "../../context/CartContext"
import "../Layout/style/cart.css"

function Cart() {
  const {cartItems, clearCart, incrementQuantity, decrementQuantity} = useCart()

  if (cartItems.length === 0){
    return (
    <div className="page">
      <h2>No hay productos en el carrito</h2>
    </div>)
  }

  const handleBuy = () => {
    Swal.fire({
      title: "Que haces?",
      text: "Esta es una pagina ficticia, no puedes comprar... Asi es como estafan a la gente",
      icon: "error"
    }).then(()=>clearCart())
  }

  const totalPrice =cartItems.reduce((total,item) => total +item.precio * item.cantidad, 0)
  return (
    <div className="page">
      <h2>Tu carrito</h2>
      <table className="cart-table">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Marca</th>
            <th>Precio Unitario</th>
            <th>Precio Final</th>
          </tr>
        </thead>
        <tbody>
        {cartItems.map((item,index)=>(
          <tr key={index}>
            <td>
              <img src={`/images/${item.imagenID}`}/>
            </td>
            <td>{item.nombre}</td>
            <td>
              <button className="cart-button" onClick={()=> incrementQuantity(item.nombre)}>+</button>
              {item.cantidad}
              <button className="cart-button" onClick={()=> decrementQuantity(item.nombre)}>-</button>
            </td>
            <td>{item.marca}</td>
            <td>{item.precio}</td>
            <td>{item.precio * item.cantidad}</td>
            </tr>
        ))}
        </tbody>
      </table>
      <div className="total">
        <div>
        <button className="cart-button" onClick={clearCart}>Vaciar Carrito</button>
        <button className="cart-button" onClick={handleBuy}>Comprar</button>
        </div>
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  )
}

export default Cart