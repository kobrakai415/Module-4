import React from "react"
import { InputGroup, Form, Button, FormControl } from "react-bootstrap"


class MyAddComment extends React.Component {

    state = {
        comment: "",
        rate: 1,
        elementId: this.props.book.asin
    }

    submitComment = async () => {

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"
                , {
                    method: "POST",
                    body: JSON.stringify(this.state),
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDk5OWIxZjBmYjAwMTVkOTE2ZmUiLCJpYXQiOjE2MTk3MDMzNTMsImV4cCI6MTYyMDkxMjk1M30.T78i8o1OCSa9MZ4T1PZgfZUpU25WIlnhXWypzXYfPQ0"
                    }
                })
            console.log(response.json())
            if (response.ok) {
                alert("Your comment: " + " " + this.state.comment + " " + "for book: " + " " + this.props.book.title + " " + "was sent")
            }
        }
        catch (error) {
            console.log(error.message)

        }

    }



    handleChange = (e) => {
        let id = e.target.id
        let value = e.target.value

        this.setState({ [id]: value })

    }

    render() {

        return <>
            <InputGroup className="flex-column d-flex mb-3">

                <Form.Group className="mt-2" controlId="exampleForm.ControlSelect1">
                    <Form.Label>Rating out of 5</Form.Label>
                    <Form.Control
                        id="rate"
                        value={this.state.rating}
                        onChange={this.handleChange}

                        as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <FormControl
                    id="comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                    className="mb-2 w-100"
                    placeholder="Your comment"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button onClick={this.submitComment} variant="outline-secondary">Submit</Button>
                </InputGroup.Append>
            </InputGroup>

        </>

    }

}


export default MyAddComment