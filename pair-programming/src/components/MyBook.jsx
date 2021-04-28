import { Col, Card, Button } from 'react-bootstrap'
import React from 'react'

class MyBook extends React.Component {

  state = {
    selected: false
  }

  
  clickHandle = (e) => {
    console.log(e)
    this.setState({ selected: true ? true : false})
}
  render() {

    const border = this.state.selected


    return <Col className={border ? "selected" : ""} key={this.props.book.asin} md={3}>
      <Card  className="mb-3 shadow-lg">
        <Card.Img onClick={this.clickHandle} height="350" variant="top" src={this.props.book.img} />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
              </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
    </Col>
  }
}

export default MyBook