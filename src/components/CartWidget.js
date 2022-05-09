import { Link } from "react-router-dom";
const CartWidget = () => {
  return (
    <>
      <Link to="/Cart">
        <span className="material-icons colorIcon">shopping_cart</span>
      </Link>
    </>
  );
};
export default CartWidget;
