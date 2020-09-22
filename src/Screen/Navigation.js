import React,{Component} from 'react';
//import './App.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,FormControl ,Form} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
	render(){
		return(
           <div>
            <Navbar bg="light" expand="lg">
               <Navbar.Brand href="#home">Kenshoo</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className="mr-auto">
                     <NavLink to="/Home" style={{padding :'10px'}}>Home</NavLink>
                     <NavLink to="/Contact" style={{padding :'10px'}}>Company</NavLink>   
                   </Nav>
                   <Form inline>
                     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                     <Button variant="outline-success">Search</Button>
                   </Form>
                </Navbar.Collapse>
               </Navbar>
            </div>
		)
	}
  
}

export default Navigation;
