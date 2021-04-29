import React from "react"
import { Col, Card, Button, } from 'react-bootstrap'
import MyCommentArea from "./MyCommentArea"

class MyBook extends React.Component {

    state = {
        show: false
    }

    showCommentsArea = () => {
        this.state.show? this.setState({show: false}) : this.setState({show: true})
        console.log(this.props.book.asin)
      }


    render () {
        return <Col md={3} key={this.props.book.asin}>
        <Card  className="mb-3 shadow-lg">
          <Card.Img height="350" variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button onClick={this.showCommentsArea} variant="primary">Display comments</Button>
          </Card.Body>

        </Card>
        { this.state.show && <MyCommentArea book={this.props.book}/>}
      </Col>
    }
}


export default MyBook