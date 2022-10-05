

import Producto from "../Components/Producto"
import "../Stylesheets-Section/ListaProductos.css"

export const productos = [
    {
        id: 1,
        image: "https://http2.mlstatic.com/D_NQ_NP_608891-MLA31023920148_062019-V.webp",
        name: "Mouse Genius Dx-110 Usb 1000 Dpi Negro 31010116100",
        price: 1020,
    },
    {
        id: 2,
        image: "https://http2.mlstatic.com/D_NQ_NP_897944-MLA32701642779_102019-V.webp",
        name: "Mouse M100 Logitech",
        price: 1379,
    },
    {
        id: 3,
        image: "https://http2.mlstatic.com/D_NQ_NP_674581-MLA41799362594_052020-V.webp",
        name: "Mouse de juego Razer DeathAdder Essential negro",
        price: 5994,
    },
    {
        id: 4,
        image: "https://http2.mlstatic.com/D_NQ_NP_979137-MLA44255818618_122020-V.webp",
        name: "Mouse Inalambrico Recargable Optico 2.4g Portatil Bluetooth",
        price: 1699,
    },
    {
        id: 5,
        image: "https://http2.mlstatic.com/D_NQ_NP_835019-MLA32158087459_092019-V.webp",
        name: "Mouse de juego HyperX Pulsefire Core negro",
        price: 2499,
    },
    {
        id: 6,
        image: "https://http2.mlstatic.com/D_NQ_NP_759646-MLA48850429918_012022-V.webp",
        name: "Auriculares inalámbricos CAT STN-28 rosa",
        price: 3798,
    },
    {
        id: 7,
        image: "https://http2.mlstatic.com/D_NQ_NP_878789-MLA40161268975_122019-V.webp",
        name: "Auriculares Logitech H390 negro",
        price: 6699,
    },
    {
        id: 8,
        image: "https://http2.mlstatic.com/D_NQ_NP_630172-MLA48751441285_012022-V.webp",
        name: "Auriculares gamer inalámbricos Logitech G",
        price: 14983,
    },
    {
        id: 9,
        image: "https://http2.mlstatic.com/D_NQ_NP_675916-MLA40762447172_022020-V.webp",
        name: "Auriculares gamer inalámbricos HyperX",
        price: 14799,
    },
    {
        id: 10,
        image: "https://http2.mlstatic.com/D_NQ_NP_884371-MLA43372208546_092020-V.webp",
        name: "Auricular Gamer Melon Rgb Con Microfono",
        price: 2999,
    },
]


//Agregar funcionalidad "comprarAhora"
const ListaProductos = ({ agregarAlCarrito }) => {

    const comprarAhora = (id) => console.log(id)

  return (
    <div className="contenedor-lista-productos">
        {productos.map((producto) => <Producto key={producto.id} data={producto} comprarAhora={comprarAhora} agregarAlCarrito={agregarAlCarrito}/> )}
    </div>
  )
}

export default ListaProductos