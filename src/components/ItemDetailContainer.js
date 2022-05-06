import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const productoDetail = [
  {
    id: 1,
    url: "../img/smartv.png",
    nombre: "TV SMART LG",
    categoria: "smart-tv",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam!",
    precio: 45000,
    color: "BLACK",
  },
  {
    id: 2,
    url: "../img/smartphone.jpg",
    nombre: "SMARTPHONE SARASA",
    categoria: "smartphones",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias.",
    precio: 25000,
    color: ["BLACK", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 3,
    url: "../img/tablet.jpg",
    nombre: "TABLET PRO",
    categoria: "tablets",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur.",
    precio: 25000,
    color: ["RED", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 4,
    url: "../img/smartv.png",
    nombre: "TV SMART LG",
    categoria: "smart-tv",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam!",
    precio: 45000,
    color: "BLACK",
  },
  {
    id: 5,
    url: "../img/smartphone.jpg",
    nombre: "SMARTPHONE SARASA",
    categoria: "smartphones",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias.",
    precio: 25000,
    color: ["BLACK", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 6,
    url: "../img/tablet.jpg",
    nombre: "TABLET PRO",
    categoria: "tablets",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur.",
    precio: 25000,
    color: ["RED", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 7,
    url: "../img/smartv.png",
    nombre: "TV SMART LG",
    categoria: "smart-tv",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aliquam!",
    precio: 45000,
    color: "BLACK",
  },
  {
    id: 8,
    url: "../img/smartphone.jpg",
    nombre: "SMARTPHONE SARASA",
    categoria: "smartphones",
    descripcion:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias.",
    precio: 25000,
    color: ["BLACK", "METAL-GRAY", "RADIAL BLUE"],
  },
  {
    id: 9,
    url: "../img/tablet.jpg",
    nombre: "TABLET PRO",
    categoria: "tablets",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, consectetur.",
    precio: 25000,
    color: ["RED", "METAL-GRAY", "RADIAL BLUE"],
  },
];

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(true);
  const [detalle, setdetalle] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    //console.log(id);
    const itemSeleccionado = productoDetail.filter((detalle) => {
      return detalle.id == id;
    })[0];
    //console.log(itemSeleccionado);
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(productoDetail);
      }, 2000);
    });
    getItem.then((res) => {
      setCargando(false);
      setdetalle(itemSeleccionado);
    });
    getItem.catch((error) => {
      console.log("Algo salió mal :(");
    });
  }, [detalle]);

  const onAdd = () => {};

  if (cargando) {
    return (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <>
        <ItemDetail detalle={detalle} />
      </>
    );
  }
};
export default ItemDetailContainer;
