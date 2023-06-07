import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";

function BasicNavBar({ links }) {
    return (
        <Navbar className="bg-warning " color=" " light expand="md">
            <Nav className="justify-content-center " navbar>
                {links.map((link, index) => (
                    <NavItem key={index}>
                        <NavLink href={link.url}><b className="text-red" style={{ fontSize: 20 }}>{link.title}</b></NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Navbar >
    );
}

export default BasicNavBar;
