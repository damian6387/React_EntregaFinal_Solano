import Container from "react-bootstrap/Container";
import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <Container className="d-flex flex-wrap mt-4">
      {productos.length > 0 &&
        productos.map((producto) => {
          //Key para identificar los elementos del array
          return <Item key={producto.id} producto={producto} />; //Retornas a Item cada uno de los productos
        })}
    </Container>
  );
};

export default ItemList;
