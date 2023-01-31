import {Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {  getProducts } from '../provider/product.provider.js';
import CardComponent from '../components/product.pages/CardComponent.jsx'
import PaginationComponent from '../components/utils/Pagination.jsx';
import CarouselComponent from '../components/CarouselComponent.jsx';

const ProductPages = ()=>{

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
        <Container className="" >     
            <h1>Productos</h1>
            <CarouselComponent/>
            <Row>
                <CardComponent pagina={ pagina } porPagina={ porPagina } products={products} />
            </Row>
            <Row className="d-flex justify-content-center ">
            <PaginationComponent pagina={ pagina } setPagina={setPagina} maximo={maximo} />
            </Row>
        </Container>
    </>)}
export default ProductPages;