import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";

export function CartSummary() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        {cart.length > 0 ? (
          <DropdownMenu end>
            {cart.map((cartItem, index) => (
              <DropdownItem
                key={cartItem.product.id}
                className="d-flex justify-content-between"
              >
                {cartItem.product.productName + " "}
                <Badge pill color="success">
                  {cartItem.count}
                </Badge>{" "}
                <Badge
                  color="danger"
                  pill
                  onClick={() => dispatch(removeFromCart(index))}
                >
                  x
                </Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem action href="#" tag="a">
              <Link to="/cart">Go to Cart Details</Link>
            </DropdownItem>
          </DropdownMenu>
        ) : null}
      </UncontrolledDropdown>
    </div>
  );
}
