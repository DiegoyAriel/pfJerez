import { useCart } from "../../context/CartContext"
import Swal from "sweetalert2"

function Item({nombre, precio, descripcion, marca, imagenID}) {
  const {addItemToCart, cartItems} =useCart()

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.nombre === nombre)
    if (existingItem) {
        existingItem.cantidad += 1
        Swal.fire({
            title: "Producto Actualizado",
            text: `Has añadido otra unidad de ${nombre} al carrito`,
            icon: "success"
        })
    }else{
    const newItem = {nombre, precio, descripcion,marca,imagenID, cantidad:1}
    addItemToCart(newItem)
    Swal.fire({
        title: "Grazzi",
        text: `${nombre} ha sido añadido a tu carrito!`,
        icon: "success"
    })}
  }
    return (
    <div className="card">
        <img src={`/images/${imagenID}`} alt={nombre} className="product-image" />
        <h3>{nombre}</h3>
        <h4>{marca}</h4>
        <p>{descripcion}</p>
        <p><strong>Precio: </strong>${precio}</p>
        <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  )
}

export default Item