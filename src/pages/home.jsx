import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {  getProducts } from '../provider/product.provider.js';

//import components
import CardComponent from '../components/product.pages/CardComponent.jsx'
import PaginationComponent from '../components/utils/Pagination.jsx';
import CarouselComponent from '../components/CarouselComponent.jsx';
import { NosotrosComponent } from '../components/utils/NosotrosComponent.jsx';

const HomePage = ()=>{
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(4);
    const [products, setProducts] = useState([]);
    const maximo = products.length / porPagina;
   
    useEffect(()=>{
        getProducts().then( result =>{
            setProducts(result);
        });
    },[])

    return (<>

        <Container className="main_container" >   
        <CarouselComponent/>  
        <hr></hr>
        <h3 className="product_title">PRODUCTOS</h3>
        
            <Row className="row-card">
                <CardComponent pagina={ pagina } porPagina={ porPagina } products={products} />
            </Row>
            <Row className="d-flex justify-content-center ">
                
            <PaginationComponent pagina={ pagina } setPagina={setPagina} maximo={maximo} />
            
            </Row>

            <Row className='d-flex justify-content-center '>
                <h2 className='compromiso_title'>NUESTRO COMPROMISO</h2>
              
                <NosotrosComponent/>
                
            </Row>
            <hr></hr>
        </Container>
    </>)

}
export default HomePage;