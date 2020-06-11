import React, { Component } from 'react'
import {Form,FormControl,Navbar,NavDropdown,Button ,Nav} from 'react-bootstrap'
import Mail from './quintype.png'
import './styles.css'
export class Navbars extends Component {
    render() {
        return (
            <div>
                 <div>
                 <Navbar bg="light" expand="lg" style={{height:"100px"}}>
        <Navbar.Brand href="#home"><img src={Mail} alt="QuinType"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link ><h5 className="bars">Company</h5></Nav.Link>
      <Nav.Link  href="#link"><h5 className="bars">Products</h5></Nav.Link>
      <Nav.Link><h5 className="bars">For Developers</h5></Nav.Link >
        <Nav.Link  href="#action/3.2"><h5 className="bars">Knowledge</h5></Nav.Link >
        <Nav.Link   href="#action/3.3"><h5 className="bars">Platform</h5></Nav.Link >
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-success">Search</Button> */}
    </Form>
  </Navbar.Collapse>
</Navbar>

</div>
            </div>
        )
    }
}

export default Navbars
