//import Card from "react-bootstrap/Card";
//import Container from "react-bootstrap/Container";
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
    <div className="cardItemStyle">
      <img className="imageStyle" src={item.image} alt="" />
      <div className="textDetailStyle">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <ItemCount
          cantidad={cantidad}
          handleSumar={handleSumar}
          handleBorrar={handleBorrar}
          handleAgregar={() => {
            agregarAlCarrito(item, cantidad); //Pasas los parametros
          }}
        />
      </div>
    </div>

    /*<div>
      <Container>
        <Card style={{ width: "18rem" }} className="cardStyle">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <div className="textCardStyle">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleBorrar={handleBorrar}
                handleAgregar={() => {
                  agregarAlCarrito(item, cantidad); //Pasas los parametros
                }}
              />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>*/
  );
};

export default ItemDetail;
