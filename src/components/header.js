import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Header = ( props ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar style={{lineHeight: "0"}} fixed="top" light expand="sm">
        <div className="container">
        <NavbarBrand style={{fontSize: "1rem"}} href="/">{props.siteTitle}</NavbarBrand>
        <NavbarToggler style={{padding: "0.1rem 0.5rem"}} onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">אודותיי</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags/">תגיות</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects/">פרוייקטים</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    </div>
    </Navbar>
  );
  }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
