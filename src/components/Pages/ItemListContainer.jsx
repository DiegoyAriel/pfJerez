import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import ItemList from './ItemList'
import "../Layout/style/page.css"


function ItemListContainer() {
  const [items, setItems] = useState([])
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    const db =getFirestore()
    const itemsCollection = collection(db, "items")
  
    getDocs(itemsCollection).then((snapshot)=>{
    const productos = snapshot.docs.map(doc => ({
      id: doc.id, 
      ... doc.data(),
    }))
    console.log(productos)
    setItems(productos)
    })
    .catch((error)=> console.error("Error al obtener tus productos", error))
    .finally(()=> setLoading(false))
  }, [])
  return (
    <div className='page'>
      <h2>Nuestros productos</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList items={items}/>}
    </div>
  )
}

export default ItemListContainer