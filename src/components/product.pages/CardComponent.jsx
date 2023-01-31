import { useState, useContext } from 'react';
import { Button, Card,Form ,Container, Row, Col, Pagination } from 'react-bootstrap';
import { dataContext } from '../context/DataContext.jsx';
import { Link } from "react-router-dom";    
const CardComponent = (props)=>{
    const {products, pagina, porPagina } = props
    const [count, setCount] = useState(1);
    //ocupando datacontext
    const { data, cart,setCart}= useContext(dataContext);
    
    const addCount =()=>{
        setCount(count+1)
    }

    const subtractCount =()=>{
        setCount(count-1);
    }
    console.log('productos agregados', cart)
    
    const buyProducts = (product)=>{
    setCart([...cart, product]);
   }
    
        
    
    return (<>
        {
            products.slice(
                (pagina -1) * porPagina,
                (pagina -1) * porPagina + porPagina
            ).map((product)=>{return(<>
                <Col  xs={12} md={3}>
                    <Card  key={product._id} className="mb-4 card_container">
                        <Link to="/productselected">
                        <Card.Body className="card_body_container">
                            <Card.Img   src={product.image.secure_url} />
                            {/* <div  className="card_count gap-3 "> 
                                <Button>-</Button>
                                <Form.Control  value={count} className=''/>
                                <Button onClick={()=>{addCount()}}>+</Button>

                                <Button onClick={()=>{buyProducts(product)}} className="">Agregar</Button>
                            </div> */}
                             <Card.Title className='d-flex justify-content-center'>{product.name}</Card.Title>
                            <Card.Text color="">que pasa shoro</Card.Text>
                            <Card.Text>$ {product.price}</Card.Text>
                        </Card.Body>
                        </Link>
                    </Card>        
                </Col>
            
            </>)})
        }    
    </>);
}

export default CardComponent;