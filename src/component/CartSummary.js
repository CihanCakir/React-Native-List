import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink
} from "reactstrap";
import { Link } from 'react-router-dom';
export default class CartSummary extends Component {

    renderSummary() {
        let total = 0;
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Your Cart - {this.props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {
                            this.props.cart.map(cartItem => (
                                <DropdownItem key={cartItem.product.id}  >
                                    <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)} >X</Badge>
                                    {cartItem.product.productName}
                                    <Badge color="success" >{cartItem.quantity}</Badge>
                                </DropdownItem>
                            ))
                        }
                        <DropdownItem divider />
                        <DropdownItem>
                            <Link to="cart">Sepete Git</Link>
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>

            </div>
        )
    }
    renderEmptyCart() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }
    render() {

        return <div> {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()} </div>
    }
}
