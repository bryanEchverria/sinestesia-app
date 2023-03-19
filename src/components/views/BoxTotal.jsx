
import { Col, Card, Button, Container } from 'react-bootstrap';
import { dataContext } from '../context/DataContext.jsx'
import React, { useContext, useEffect } from 'react'
const BoxTotal = ()=>{
    const  cart  = useContext(dataContext);
    const sumTotal = cart.data.reduce((acc,el)=>acc+el.price,0)
    return(<>
        <Col xs={12} md={6}>
            <Container className='box_container'>
                <Card className='total_container'>
                <Card.Header>Caja</Card.Header>
                    <Card.Body>
                        <Card.Subtitle>Sub-total: {sumTotal}</Card.Subtitle>
                        <hr></hr>
                        <Card.Subtitle>TOTAL: {sumTotal}</Card.Subtitle>
                        <hr></hr>
                        <div className='button_container'>
                        <Button>Pagar</Button>
                        <Button>Seguir comprando</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Col>
    </>)

}

export default BoxTotal;

