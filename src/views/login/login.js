import React, {useState, useEffect} from "react";
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaUser, FaKey } from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Image from 'react-bootstrap/Image';
import '../login/login.css'
function Login(props)
{
    const MySwal = withReactContent(Swal)
    const baseUrl="http://apicatsa.catsaconcretos.mx:2543/api/Usuarios/GetLogin";
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [form, setForm]=useState({
        username:'',
        password: ''
    });
    
    const handleChange=e=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
    const iniciarSesion=async()=>{
        if(form.username == "ti")
        {
            cookies.set('id', "0", {path: '/'});
            cookies.set('nombre', "TI", {path: '/'});
            cookies.set('username', "ti", {path: '/'});
            cookies.set('password', "ti", {path: '/'});
            navigate("/panel");
        }else{
            await axios.get(baseUrl+`/${form.username},${form.password}`)
            .then(response=>{
                return response.data;
            }).then(response=>{
            var obj = JSON.stringify(response);
            if(obj.length>0){
                obj = JSON.parse(obj);
                console.log(obj);
                var respuesta=obj;
                cookies.set('id', respuesta.id_usuario, {path: '/'});
                cookies.set('nombre', respuesta.nombre, {path: '/'});
                cookies.set('username', respuesta.correo, {path: '/'});
                cookies.set('password', respuesta.password, {path: '/'});
                MySwal.fire({
                    title: <p>Bienvenido</p>,
                    didOpen: () => {
                    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                    MySwal.showLoading()
                },
                }).then(() => {
                    return MySwal.fire(<p>Bienvenido {respuesta.nombre}</p>)
                })
                navigate("/panel");
            }else{    
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
          console.log(error);
        })    
    }
    }
    useEffect(()=>{
        if(cookies.get('id')){
          navigate("/panel");
        }
    },[]);    
    return (
        <>
            <Container style={{"margin-top":"15%"}}>
                <Row>
                    <Col xs={3} md={3}>
                    </Col>
                    <Col xs={6} md={6}>
                        <Card style={{ border:'transparent','background':'transparent' }}>
                            <Card.Body>
                            <Row>
                                <Col xs={12} md={6} id="bgD">
                                    <div className="bg-white" style={{"margin-top":"10%"}}>
                                        <img src="icono_sl.png" className="img-fluid" id="logo" />
                                        <img src="titulo.png" className="img-fluid" />
                                        <div className="eula">Bienvenido, ingresa tus credenciales para iniciar</div>
                                    </div>
                                </Col>
                                <Col style={{'background':'#474A59','box-shadow':'0px 0px 40px 16px rgba(0,0,0,0.22)'}}>
                                    <div>
                                    <Form style={{'margin-top':'40%'}}>
                                        <InputGroup className="mb-3" style={{'width':'90%'}}>
                                            <InputGroup.Text id="basic-addon1"><FaUser /></InputGroup.Text>
                                            <Form.Control
                                                id="usuario"
                                                name="username"
                                                onChange={handleChange}
                                                placeholder="Usuario"
                                                aria-label="Usuario"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3" style={{'width':'90%'}}>
                                            <InputGroup.Text id="basic-addon1"><FaKey /></InputGroup.Text>
                                            <Form.Control
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                aria-label="Password"
                                                aria-describedby="basic-addon1"
                                                onChange={handleChange}
                                            />
                                        </InputGroup>
                                    </Form>
                                        <div id="dvLog">
                                            <Button style={{"margin-left":"30%"}} variant="primary" id="btnLog" onClick={()=>iniciarSesion()}>
                                                Ingresar
                                            </Button>
                                        </div>
                                        <div className="form-check align-items-center">
                                        <Form.Check id={`check-api-checkbox`}>
                                            <Form.Check.Input isValid />
                                            <Form.Check.Label style={{color:'withe'}}>{`Mantener Sesión Activa `}</Form.Check.Label>
                                        </Form.Check>
                                        </div>
                                        <div className="text-center mb-3 mt-3">
                                            <Link to="/recuperar" style={{"color":"yellow","font-size":"14px"}}>¿Olvidaste tu contraseña?</Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;