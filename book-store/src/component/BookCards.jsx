import { Card } from "react-bootstrap";
import history from "../data/history.json"
import MyBadgeFunction from "./MyBadge";

const MyBook = (prop) => (
    console.log(history),
    
  <Card style={{  width: '18rem' }}>
  <Card.Img variant="top" src={prop.b.img}/>
  <MyBadgeFunction price={prop.b.price}/>
  <Card.Body>
    <Card.Title>{prop.b.title}</Card.Title>
    <Card.Text>
     {prop.b.category}
    </Card.Text>
  </Card.Body>
</Card>
)

export default MyBook