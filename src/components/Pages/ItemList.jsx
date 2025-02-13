import Item from "./Item"
import { useState } from "react"

const categories = {
    LICOR: "Licor",
    BLANCO: "Vino Blanco",
    ROJO: "Vino Rojo",
    CERVEZA: "Cerveza"
}


function ItemList({items, showFilters=true}) {
    console.log("items:", items)
    const [selectedCategory, setSelectedCategory] = useState("")
    const filteredItems = selectedCategory ? items.filter(item=>item.category === selectedCategory) : items 


  return (
    <div>
        {showFilters && (
        <div className="filtro">
            <button onClick={()=> setSelectedCategory(categories.BLANCO)}>Vino Blanco</button>
            <button onClick={()=> setSelectedCategory(categories.ROJO)}>Vino Rojo</button>
            <button onClick={()=> setSelectedCategory(categories.CERVEZA)}>Cervezas</button>
            <button onClick={()=> setSelectedCategory(categories.LICOR)}>Licores</button>
            <button onClick={()=> setSelectedCategory("")}>Ver todo</button>
        </div>
        )}
        <div className="productos">
            {filteredItems.map((item)=>(
                <Item
                    key={item.id}
                    nombre={item.title}
                    precio={item.price}
                    descripcion={item.description}
                    marca={item.brand}
                    imagenID={item.imageID}/>
            ))}
        </div>
    </div>
  )
}

export default ItemList