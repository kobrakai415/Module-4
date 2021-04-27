import { Col, Card, Button, Row } from 'react-bootstrap'
import romance from '../data/romance.json'

const MyLatestReleases = () => {
  return  <Row> {
    romance.map((book) => {


      return <Col md={3}>
        <Card className="mb-3 shadow-lg">
          <Card.Img height="350" variant="top" src={book.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-truncate">{book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </Col>


    })
  }
  </Row>
}


export default MyLatestReleases