import React, { useState, useEffect } from "react";
import Logo from "../Components/Logo";
import image from "../Assets/logo.png";
import "../Stylesheets-Section/Header.css";
import Categoria from "../Components/Categoria";
import Carrito from "../Components/Carrito";
import Buscador from "../Components/Buscador";

const Header = ({ contador }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
<<<<<<< HEAD
    window.addEventListener('resize', updateDimensions);
  },[])
  
=======
    window.addEventListener("resize", updateDimensions);
  }, []);
>>>>>>> ed368dd6617e7c032cc72eb306c5a9b3c0cf3c0e
  return (
    <div className="contenedor-header">
      <Logo logo={image} />
      {width > 600 ? <Buscador /> : <Categoria />}
      <Carrito contador={contador} />
    </div>
  );
};

export default Header;
