import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';


export default class Navbarr extends Component {


    render() {

        const { products } = this.props;


        return (

            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/homepage">Homepage</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/homepage">Details</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {/* Ürünler <b> {products.length} </b> */}
                                </DropdownToggle>

                                <DropdownMenu right>

                                    <DropdownItem >

                                    </DropdownItem>


                                </DropdownMenu>

                            </UncontrolledDropdown>

                            <NavItem>


                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


