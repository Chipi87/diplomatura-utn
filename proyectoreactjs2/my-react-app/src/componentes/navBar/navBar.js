import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



const Menu = () => {
    return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">El Remanso </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Inicio</Nav.Link>
                            <Nav.Link href="#link">Cabañas</Nav.Link>
                            <Nav.Link href="#link">Servicio</Nav.Link>
                            <Nav.Link href="#link">Imagenes</Nav.Link>
                            <Nav.Link href="#link">Consultas</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );
}
export default Menu;