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
    DropdownItem
} from 'reactstrap';


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar color="secondary" light expand="md">
                    <NavbarBrand href="/"><b>Homepage</b></NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/"><b>User</b></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/iyazici00"><b>Contact</b></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <b>Temalar</b>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Açık
                                    </DropdownItem>
                                    <DropdownItem>
                                        Koyu
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Özel
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

