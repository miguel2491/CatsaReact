import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoIosMail } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import '../login/login.css'
function Rec_pass(props)
{
    const MySwal = withReactContent(Swal)
    const baseUrl="http://10.20.2.98:5001/api/Usuarios";
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [form, setForm]=useState({
        correo:'',
    });
    
    const handleChange=e=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
    const EnviarCorreo=async()=>{
        await axios.get(baseUrl+`/${form.correo}`)
        .then(response=>{
          return response.data;
        }).then(response=>{
          var obj = JSON.stringify(response);
          if(obj.length>0){
            obj = JSON.parse(obj);
            console.log(obj);
            MySwal.fire({
                title: <p>Hello World</p>,
                didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
            }).then(() => {
                return MySwal.fire(<p>Se envio el correo, verifica</p>)
            })
            navigate("/");
          }else{
            MySwal.fire({
                title: <p>ADVERTENCIA</p>,
                didOpen: () => {
                // `MySwal` is a subclass of `Swal` with all the same instance & static methods
                MySwal.showLoading()
            },
            }).then(() => {
                return MySwal.fire(<p>Vuelve a Intentar</p>)
            })
          }
        })
        
        .catch(error=>{
          console.log(error);
        })     
      }  
    return (
        <>
        <ThemeProvider>
            <Container style={{"margin-top":"15%","margin-left":"40%"}}>
                <Row>
                    <Col xs={4} md={4}>
                        <Card style={{ border:'transparent','background':'#000054', "margin-left":"5%" }}>
                            <Card.Body>
                                    <Form style={{'margin-top':'10%'}}>
                                        <InputGroup className="mb-3" style={{'width':'90%','margin-left':'5%'}}>
                                            <InputGroup.Text id="basic-addon1"><IoIosMail size={"2rem"}/></InputGroup.Text>
                                            <Form.Control
                                                id="correo"
                                                name="correo"
                                                onChange={handleChange}
                                                placeholder="Correo"
                                                aria-label="Correo"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Form>
                                        <div id="dvLog">
                                            <Button style={{"margin-left":"40%"}} variant="danger" id="btnSend" onClick={()=>EnviarCorreo()}>
                                                Ingresar
                                            </Button>
                                        </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
        </>
    );
}

export default Rec_pass;