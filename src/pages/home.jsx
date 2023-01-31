import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {  getProducts } from '../provider/product.provider.js';
import CardComponent from '../components/product.pages/CardComponent.jsx'
import PaginationComponent from '../components/utils/Pagination.jsx';
import CarouselComponent from '../components/CarouselComponent.jsx';


const HomePage = ()=>{
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(3);
    const [products, setProducts] = useState([]);
    const maximo = products.length / porPagina;
   
    useEffect(()=>{
        getProducts().then( result =>{
            setProducts(result);
        });
    },[])

    return (<>
    <CarouselComponent/>
        <Container className="" >     
            
            <Row className="row-card">
                <h3 className="product_title">PRODUCTOS</h3>
             
                <CardComponent pagina={ pagina } porPagina={ porPagina } products={products} />
                
                <hr />
            </Row>
            <Row className="d-flex justify-content-center ">
                
            <PaginationComponent pagina={ pagina } setPagina={setPagina} maximo={maximo} />
            
            </Row>
        </Container>
    </>)

}
export default HomePage;