import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ producto }) => {
  return (
    /*
    <div>
      <img src={producto.image} alt={producto.title} />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>{producto.price}</p>
    </div>*/
    <div>
      <Card style={{ width: "18rem" }} className="cardStyle">
        <Card.Img variant="top" src={producto.image} className="imageCard" />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>${producto.price}</Card.Text>
          <Link to={`/item/${producto.id}`}>
            <Button variant="primary">Ver mas</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
