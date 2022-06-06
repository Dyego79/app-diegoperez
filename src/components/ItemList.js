import Item from "./Item";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <>
      <section className="listProducts">
        {productos.map((producto) => {
          return <Item key={producto.id} producto={producto} />;
        })}
      </section>
    </>
  );
};

export default ItemList;
