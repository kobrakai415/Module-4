import MyBook from './MyBook'
import { Container, Row, Form, FormControl, Button } from 'react-bootstrap'
import React from 'react'


class BookList extends React.Component {

    state = {
        searchInput: ""
    }


    handleBook = (e) => {
        this.setState({ searchInput: e.target.value })
        e.target.className = "selected"
    }



    render() {
        return (<Container>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleBook} />
                <Button variant="outline-success">Search</Button>
            </Form>
            <Row>
                {console.log("First Book:", this.props.listOfBooks[0].title.toLowerCase())}
                {console.log("searchInput:", this.state.searchInput.toLowerCase())}

                {
                    this.props.listOfBooks.filter(book => book.title.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1).map(book => {

                        return <MyBook book={book} />
                    })
                }

            </Row>
        </Container>)
    }
}

export default BookList