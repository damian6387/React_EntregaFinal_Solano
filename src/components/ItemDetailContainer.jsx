import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null); //null para que no muestre nada al principio
  const itemId = useParams().id;

  //console.log(itemId);

  useEffect(() => {
    if (itemId) {
      fetch(
        "https://64e8fe2899cf45b15fe063ea.mockapi.io/api/cafeteria/opciones"
      )
        .then((res) => {
          return res.json(); //Se captura la info en formato json
        })
        .then((data) => {
          //Se transforma la data para que sea legible y con setProductos accedes a la misma
          //Y busco el producto en la base de datos que cumpla con el id ingresado
          const itemFound = data.find((elemento) => elemento.id === itemId);
          setItem(itemFound);
        });
    }
  }, [itemId]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;
