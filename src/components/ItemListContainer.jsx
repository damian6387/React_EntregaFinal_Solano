import { useState, useEffect } from "react";
//import { pedirProductos } from "./pedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  //Estado del producto
  const [productos, setProductos] = useState([]);

  const categoria = useParams().category;

  //Cambio del estado del producto
  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoria
      ? query(productosRef, where("category", "==", categoria))
      : productosRef;
    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
