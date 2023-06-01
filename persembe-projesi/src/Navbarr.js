import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem,

} from 'reactstrap';

import { Link } from 'react-router-dom'

export default class Navbarr extends Component {


    render() {


        return (

            <div>
                <Navbar color="light" light expand="md">

                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/homepage"><b>Homepage</b></Link>
                            </NavItem>
                            <NavItem>
                                <Link style={{ marginLeft: 10 }} to="/contact"><b>Contact</b></Link>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                {/* <DropdownToggle nav caret>
                                    Ürünler <b> {products.length} </b>
                                </DropdownToggle> */}

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


