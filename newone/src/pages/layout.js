import { Outlet } from "react-router-dom"
import Footer from "../assests/components/footer"
import Navbar from "../assests/components/navbar"



const Message =() =>{
    return (
        <>
        <Navbar/>
        
        <Outlet/>
        <Footer/>
        </>
    )
}



const Layout =() =>{
    return (
        <>
        <Message/>
        </>
    )
}

export default Layout;