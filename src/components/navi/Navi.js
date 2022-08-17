import React from "react";
import { CartSummary } from "../cart/CartSummary";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";

export function Navi() {

  return (
    <div>
      <Navbar color="secondary" className="my-2">
        <NavbarBrand href="/">Happy Center</NavbarBrand>
        <Nav className="me-auto">
          <CartSummary/>
          <NavbarText><Link to="/addNewCategory">Add Category</Link></NavbarText>
        </Nav>
      </Navbar>
    </div>
  );
}
