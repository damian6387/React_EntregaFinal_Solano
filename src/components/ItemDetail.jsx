import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ItemCount from "./ItemCount";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext); //Consumo los datos de carrito
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    //return console.log(cantidad);
  }, [cantidad]);

  const handleSumar = () => {
    setCantidad(cantidad + 1);
  };

  const handleBorrar = () => {
    cantidad > 0 && setCantidad(cantidad - 1);
  };

  return (
    <div>
      <Container>
        <Card style={{ width: "18rem" }} className="cardStyle">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <ItemCount
              cantidad={cantidad}
              handleSumar={handleSumar}
              handleBorrar={handleBorrar}
              handleAgregar={() => {
                agregarAlCarrito(item, cantidad); //Pasas los parametros
              }}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ItemDetail;
