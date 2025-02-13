import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Pages/Home"
import ItemListContainer from "./components/Pages/ItemListContainer"
import Layout from "./components/Layout/Layout"
import Error from "./components/Pages/Error"
import Cart from "./components/Pages/Cart"
import Admin from "./components/Pages/Admin"
import { CartProvider } from "./context/CartContext"

import './App.css'

function App() {


  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="items"  element={<ItemListContainer/>}/>
            <Route path="admin" element={<Admin/>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
