

import Logo from "../Components/Logo"
import image from "../Assets/logo.png"
import "../Stylesheets-Section/Header.css"
import Categoria from "../Components/Categoria";
import Carrito from "../Components/Carrito";



const Header = ({ contador }) => {


  return (
    
    <div className="contenedor-header">
        <Logo logo={image}/>
        <Categoria/>
        <Carrito contador={contador}/>
    </div>

  )
}

export default Header