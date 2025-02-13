import { useState, useEffect } from "react"
import { getFirestore, collection, getDocs, Firestore } from "firebase/firestore"
import ItemList from "./ItemList"

function Home() {
  const [featuredProducts, setFeaturedProducts]=useState([])
  const [loading, setLoading]=useState(true)

  useEffect(()=>{
    const db = getFirestore()
    const itemsCollection = collection(db, "items")

    getDocs(itemsCollection).then((snapshot)=>{
      const productos =snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }))
      const featured =productos.filter((producto) => producto.isFeatured)
      setFeaturedProducts(featured)
    }).catch((error)=>{console.error("Error al cargar los productos", error)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  return (
    <div className="home">
      <div className="hero">
        <h1>Merħba a tu rincón de Malta en Chile</h1>
      </div>
      <h2>Productos destacados</h2>
      {loading ? (
        <p>cargando...</p>) : (
          <ItemList items={featuredProducts} showFilters={false}/>
        )
      }
    </div>
  )
}

export default Home