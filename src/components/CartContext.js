import { createContext, useState } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const ProviderReturn = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [productquantity, setproductquantity] = useState(0);
  const [productName, setproductName] = useState(0);
  const [productPrice, setproductPrice] = useState(0);

  const addCant = (cantidad) => {
    setproductquantity(productquantity + cantidad);
    //console.log(cantidad);

    /*  if(estaEnCarrito(producto)){
    }else{
        setproductquantity(productquantity + cantidad)
    } */
  };

  const eliminarProducto = (id) => {};
  const addProductCompleto = (nombre) => {
    console.log(nombre);
    const carritoCopy = [...carrito];
    const itemSeleccionado = carritoCopy.filter((detalle) => {
      return nombre.id == detalle.id;
    })[0];
    if (!itemSeleccionado) {
      carritoCopy.push(nombre);
      setCarrito(carritoCopy);
    } else {
      alert("este producto ya está");
    }
    console.log(carrito);
    //setCarrito(setCarrito.push(x));
  };
  const vaciarCarrito = () => {
    setCarrito([]);
  };
  const eliminar = (a) => {
    console.log(a);
  };

  const contextVal = {
    productquantity,
    productName,
    carrito,
    productPrice,
    eliminar,
    addProductCompleto,
    addCant,
    eliminarProducto,
    vaciarCarrito,
  };

  return <Provider value={contextVal}>{children}</Provider>;
};
export default ProviderReturn;
