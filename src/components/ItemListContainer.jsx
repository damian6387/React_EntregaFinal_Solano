import { useState, useEffect } from "react";
//import { pedirProductos } from "./pedirProductos";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  //Estado del producto
  //const [productos, setProductos] = useState([]);
  const [productos, setProductos] = useState([]);

  //Cambio del estado del producto
  useEffect(() => {
    /*
    pedirProductos().then((res) => {
      setProductos(res);
    });
    */
    fetch("https://64e8fe2899cf45b15fe063ea.mockapi.io/api/cafeteria/opciones")
      .then((res) => {
        return res.json(); //Se captura la info en formato json
      })
      .then((data) => {
        setProductos(data); //Se convierte la info para que sea legible y con setProductos accedes a la misma
      });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
