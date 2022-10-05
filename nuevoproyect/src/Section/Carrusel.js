
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { productos } from './ListaProductos';
import "../Stylesheets-Section/Carrusel.css"

let i = 0
let productosCarrusel = []
while (i<10) {
  productosCarrusel.push(productos[i])
  i++
}

const Carrusel = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="contenedor-carrusel" >
          {productosCarrusel.map((producto) =>   
            <Carousel.Item key={producto.id}>        
              <img
                className="d-block carrusel-imagen"
                src={producto.image}
                alt={producto.name} 
              />
            </Carousel.Item>
          )}
      </Carousel>
  )
}

export default Carrusel