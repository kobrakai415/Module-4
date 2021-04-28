import { Col, Card, Button } from 'react-bootstrap'
import React from 'react'

class MyBook extends React.Component {

    return <Col key={props.book.asin} md={3}>
        <Card className="mb-3 shadow-lg">
          <Card.Img height="350" variant="top" src={props.book.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-truncate">{props.book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
              </Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </Col>
}

export default MyBook