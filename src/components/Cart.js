import { contexto } from "./CartContext";
import { useContext } from "react";
const Cart = () => {
  const { productquantity } = useContext(contexto);
  const { carrito, eliminar } = useContext(contexto);
  console.log(carrito);
  const quitar = () => {
    eliminar(carrito);
  };
  return (
    <>
      <main className="main__cart">
        <h2>Tu Carrito ({productquantity}) Items</h2>
        <div className="main__cart__row">
          <div className="main__cart__titulo">CANT</div>
          <div className="main__cart__titulo">IMG</div>
          <div className="main__cart__titulo">PRODUCTO</div>
          <div className="main__cart__titulo">PRECIO</div>
        </div>
        {carrito.map((element) => {
          return (
            <div key={element.id} className="main__cart__row">
              <div className="main__cart__row__cont">{element.cant}</div>
              <div className="main__cart__row__cont">
                <img
                  src={element.img}
                  className="main__cart__row__cont__img"
                  alt=""
                />
              </div>
              <div className="main__cart__row__cont">{element.nom}</div>
              <div className="main__cart__row__cont">$ {element.precio}</div>
              <button onClick={quitar}>ELIMINAR</button>
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Cart;
