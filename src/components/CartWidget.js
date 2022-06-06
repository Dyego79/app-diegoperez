import { Link } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";
import "animate.css";

const CartWidget = () => {
  const { productquantity } = useContext(contexto);

  return (
    <>
      <div className="carrito">
        <Link to="/Cart">
          <div>
            <span className="material-icons colorIcon">shopping_cart</span>
          </div>
        </Link>
        {productquantity !== 0 ? (
          <div className="cart__cantidad animate__animated animate__bounceIn">
            <span>{productquantity}</span>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default CartWidget;
