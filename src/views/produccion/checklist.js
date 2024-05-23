import React, {useEffect} from 'react';
import '../../css/menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Cookies from 'universal-cookie';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaArrowAltCircleUp , FaHandsHelping, FaEye, FaShareAltSquare, FaInfoCircle, FaTruck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CheckList(props) {
    const navigate = useNavigate();
    const cookies = new Cookies();

    return (
        <>
            <Container>
                <Row className='mt-4' xs={12} sm={12}>
                    <Col xs={12} sm={12} md={4} className='mt-2 mb-4'>
                        <Card xs={4} style={{ width: '18rem', "background":'#1c84c6', color:"white"}} className='mx-auto'>
                            <div style={{margin:"20% 50% 5% 40%"}}>
                                <FaArrowAltCircleUp style={{fontSize:"52px"}}/>
                            </div>
                            <Card.Body className='text-center'>
                                <Card.Title>Levantar</Card.Title>
                                <Card.Text>
                                    Pedido
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CheckList;
