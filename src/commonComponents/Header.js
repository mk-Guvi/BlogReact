import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import routes from "../routes/routes"
import {NavLink} from "react-router-dom"

  

const Header=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
return(
  <div>
  <Navbar color="light" light expand="md">
    <NavLink to="/">BlogApp</NavLink>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="me-auto" navbar>
        <NavItem>
        <NavLink to={routes.authors} >Authors</NavLink>
        </NavItem>
        <NavItem>
        <NavLink to={routes.newPost} >AddPost</NavLink>
        </NavItem>
        
      </Nav>
      
    </Collapse>
  </Navbar>
</div>
)
}

export default Header