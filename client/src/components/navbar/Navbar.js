import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "../navbar/Navbar.css";


function NavbarComponent() {
    return (
        <Navbar className="navbarBig">
            <Navbar.Brand>
                <img
                    src="./images/logo.png"
                    width="230"
                    height="auto"
                    className="d-inline-block align-top"
                    alt="Circuit Ninjas"
                />
            </Navbar.Brand>
        </Navbar>
    )
};

export default NavbarComponent;