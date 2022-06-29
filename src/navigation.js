import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"
function Navigation() {
    return (
        <Nav style={{ background: "lightblue" }}>
            <NavItem>
                <NavLink >
                    <Link to="/" style={{ color: "black" }}>
                        Home
                    </Link>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink >
                    <Link to="/addNewUser" style={{ color: "black" }}>
                        Add user
                    </Link>
                </NavLink>
            </NavItem>
        </Nav>
    )
}

export default Navigation