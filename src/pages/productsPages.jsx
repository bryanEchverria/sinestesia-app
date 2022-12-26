import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getImagen } from '../provider/pokemon.provider';
import Form from 'react-bootstrap/Form';

const ProductPages = ()=>{

    return (<>
        <Container>        
        <h1>produxdctos</h1>
        
        <Form enctype="multipart/form-data" method="post" action="/save">
            
            <Form.Group className="mb-3" controlId="form">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder=" nombre de producto" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>stock</Form.Label>
                <Form.Control type="number"   placeholder=" stock" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>precio</Form.Label>
                <Form.Control type="number" placeholder="precio producto" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>descripcion</Form.Label>
                <Form.Control type="text" placeholder="dscripcion" />
            </Form.Group>

            <Button type="submit" >guardar</Button>
            
        </Form>

                  
                    
       
        </Container>
    </>)}
export default ProductPages;