import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcompo({cardimg,cardname,price}) {
  return (
    <Card style={{ width: '13rem' , border:"none"}}>
      <Card.Img variant="top" src={cardimg} />
      <Card.Body>
        <Card.Title>{cardname}</Card.Title>
        <p><b>{price}</b></p>
      </Card.Body>
    </Card>
  );
}

export default Cardcompo;