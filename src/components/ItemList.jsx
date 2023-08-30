import Container from "react-bootstrap/Container";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Container className="d-flex flex-wrap mt-3">
      {productos.length > 0 &&
        productos.map((producto) => {
          //Key para identificar los elementos del array
          return <Item key={producto.id} producto={producto} />;
        })}
    </Container>
  );
};

export default ItemList;

/*
<div style={{ display: "flex", flexWrap: "wrap" }}>
        {productos.length > 0 &&
          productos.map((producto) => {
            //Key para identificar los elementos del array
            return <Item key={producto.id} producto={producto} />;
          })}
      </div>
*/
