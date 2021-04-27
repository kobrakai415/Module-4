import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
// import logo from '../storelogo.png'

const MyNavBar = () => {

    return <Navbar bg="dark" variant="dark" expand="lg">
    <Navbar.Brand href="#home"><img height="50"src="https://i.pinimg.com/originals/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg" alt="Store logo"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

}

export default MyNavBar