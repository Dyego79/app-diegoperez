import Swal from "sweetalert2";
import { useState, useEffect } from "react";
const ItemCount = ({ initial, stock, onAdd }) => {
  const [contador, setContador] = useState(initial);
  useEffect(() => {}, []);
  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          title: "Lo sentimos, no hay Stock disponible.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
  };
  const restar = () => {
    setContador(contador - 1);
  };
  const addCarrito = () => {
    console.log(contador);
  };
  return (
    <>
      <div className="contentBtn">
        <div className="botones">
          <button onClick={restar} className="buttonGral">
            <span className="material-symbols-outlined">do_not_disturb_on</span>
          </button>
          <span className="contador">{contador}</span>
          <button className="buttonGral">
            <span onClick={sumar} className="material-symbols-outlined">
              add_circle
            </span>
          </button>
        </div>
        <button onClick={addCarrito} className="agregar buttonGral">
          AGREGAR A CARRITO
        </button>
      </div>
    </>
  );
};

export default ItemCount;
