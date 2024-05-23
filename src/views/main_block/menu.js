import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { IoIosHelpCircle } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

function Menu(props) {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const cerrarSesion=()=>{
        cookies.remove('id', {path: '/'});
        cookies.remove('nombre', {path: '/'});
        cookies.remove('username', {path: '/'});
        cookies.remove('password', {path: '/'});
        navigate('/');
    }
    console.log(cookies.get('nombre'));    
    useEffect(()=>{
        if(!cookies.get('id')){
            navigate('./');
        }
    },[]);
  return (
    <>
        <Navbar collapseOnSelect expand="lg" style={{"background":"#000054", color:"red"}}>
            <Container>
                
                <Navbar.Brand style={{color:"white"}} href="#">
                    <img src='../logo.png' style={{width:"60px"}} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#" style={{color:"white"}} className='text-center'>
                        ¡Hola! {cookies.get('nombre')}
                    </Nav.Link>
                    <NavDropdown title={<span className="text-white">Admin</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Roles</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Permisos</NavDropdown.Item>
                    <NavDropdown.Item href="#">Asignaciones</NavDropdown.Item>
                    <NavDropdown.Item href="#">Asignar Usuario/Planta</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Catalogos</NavDropdown.Item></NavDropdown>
                    <NavDropdown title={<span className="text-white">Ventas</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cotizador</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pedidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Reportes</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Ventas Diarias</NavDropdown.Item></NavDropdown>
                    <NavDropdown title={<span className="text-white">Producción</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Mantenimiento</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Logistica</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Indicadores</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Finanzas</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Facturación</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title={<span className="text-white">Calidad</span>} id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets" style={{color:"white"}}>
                        <IoIosHelpCircle style={{"fontSize":"1.5rem"}} /> Ayuda
                    </Nav.Link>
                    <Nav.Link eventKey={2} style={{color:"white"}} onClick={()=>cerrarSesion()}>
                        <CiLogout style={{"fontSize":"1.5rem"}} /> Cerrar Sesión
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}

export default Menu;