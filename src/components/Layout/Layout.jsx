import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"


function Layout() {
  return (
    <div>
        <NavBar/>
        <Outlet className="body"/>
        <Footer/>
    </div>
  )
}

export default Layout