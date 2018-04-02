import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {Link} from 'react-router';


const Header = () => {
  return (
    <Navbar>
      <div style={{ width: "30%" }}>
          <Navbar.Brand>
            <a href="/">Home</a>
          </Navbar.Brand>
        {/* <Nav>
        </Nav> */}
      </div>
      <div style={{width:"70%"}}>
        <Navbar.Brand>
          <p style={{fontSize:"2em"}}>Pair Programming Nights</p>
        </Navbar.Brand>
      </div>
    </Navbar>
  )
}

export default Header;