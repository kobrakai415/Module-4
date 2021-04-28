import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
// import logo from '../storelogo.png'

class MyNavBar extends React.Component {

 

//   handleChange = (e) => {
//     // e.target.value
//     // e.target.id
//     let id = e.target.id
//     console.log('the field I need to change in the reservation object is', id)
//     // id can be "name", "phone", "smoking"
//     this.setState({
//         reservation: {
//             ...this.state.reservation,
//             [id]: id === 'smoking' ? e.target.checked : e.target.value
//         }
//     })
// }

  render() {
    return (<Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home"><img height="50" src="https://i.pinimg.com/originals/18/18/88/18188820e5da19a3908aeb18af5246b5.jpg" alt="Store logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>)
  }

}

export default MyNavBar