import { useState, useContext } from 'react';
import { Button, Card,Form ,Container, Row, Col, Pagination,  } from 'react-bootstrap';
import { dataContext } from '../context/DataContext.jsx';
import { Link } from "react-router-dom";    
import Cookies from 'js-cookie';
const CardComponent = (props)=>{
    const {products, pagina, porPagina } = props
    const [count, setCount] = useState(1);
    //ocupando datacontext
    const { addToCart, cart, subtractAmount, addAmount, cantidadProductos, getCartFromCookie}= useContext(dataContext);
    const cartFromCookie = Cookies.get("cart");
    const addCount =()=>{
        setCount(count+1)
    }

    const subtractCount =()=>{
        setCount(count-1);
    }
   


    const buyProducts = (product)=>{
    setCart([...cart, product]);
   }
   
   
    return (<>
        {
            products.slice(
                (pagina -1) * porPagina,
                (pagina -1) * porPagina + porPagina
            ).map((product)=>{return(
                <Col  xs={12} md={3} key={product._id}>
                    <Card   className="mb-4 card_container">
                        <Card.Body className="card_body_container">
                        <Link to="/productselected">
                            <Card.Img   src={product.image.secure_url} />
                             <Card.Title className='d-flex justify-content-center'>{product.name}</Card.Title>
                            <Card.Text color="">Agregar</Card.Text>
                            <Card.Text>$ {product.price}</Card.Text>
                            </Link>
                        </Card.Body> 
                        <Card.Footer>
                            <Container className=" cardFooter_container">
                            <div className='btn_option'>
                                 <Button onClick={()=>{subtractAmount(product)}}>-</Button> 
                                <input value={ cantidadProductos[product._id] } className="input_btn"></input>
                                <Button onClick={()=>{  addAmount(product)}} >+</Button>
                             </div>
                             <Button onClick={ ()=>{addToCart()} } className='add_btn'>agregar</Button> 
                             </Container>
                        </Card.Footer>
                    </Card>        
                </Col>           
            )})
        }    
    </>);
}
export default CardComponent;