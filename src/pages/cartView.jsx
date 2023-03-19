import React, { useContext } from 'react';
import { Row, Col,Container } from 'react-bootstrap';
import TablePreOrder from '../components/views/TablePreOrder.jsx';
import BoxTotal from '../components/views/BoxTotal.jsx';
import { dataContext } from '../components/context/DataContext.jsx';

const cartView = () => {
  const cart = useContext(dataContext);
  console.log('aca si funciona ', cart)

  return (
    <>
        <Container className="cart_container">
            <Row className="w-100 cart-row">
              <hr></hr>
            <h2 className="">Carro de compras</h2>
                <TablePreOrder/>
                <BoxTotal/>
                <hr  ></hr>        
            </Row>
        </Container>
            
  
    </>
    
  )
}

export default cartView
