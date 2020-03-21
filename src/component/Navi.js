import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="xs">
                    <NavbarBrand href="/">CC</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="form1">Form Demo 1</Link>
                                </NavLink>
                                <NavLink>
                                    <Link to="form2">Form Demo 2</Link>
                                </NavLink>
                            </NavItem>
                            <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
