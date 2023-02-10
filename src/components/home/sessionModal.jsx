import Modal from 'react-bootstrap/Modal';
import React, { useState }  from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Col'

const SessionModal = ({show, handleClose, handleShow})=> {

    return(<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton> <Modal.Title>Inicio sesion</Modal.Title> </Modal.Header>
            <Modal.Body>
                <Form>
                    <Container fluid>
                        <Row>
                            <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu email" />
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-4" >
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control type="password" placeholder="Ingresa tu contraseña"/>
                                </Form.Group >     
                            </Col>
                            <Col>
                                <a href="#" className="">resetear contraseña</a>
                            </Col>
                            <Col>
                            <Button   className="mx-auto my-5">Ingresar</Button>    
                            </Col>
                        </Row>
                        
                    </Container>
                </Form>
            </Modal.Body>
        
        </Modal>

    </>)
}

export default SessionModal;
