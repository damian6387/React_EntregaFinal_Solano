import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const ItemDetail = ({ item }) => {
  return (
    /*<div>
      {item.category}
      <br></br>
      {item.description}
      <div>*/
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

            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ItemDetail;
