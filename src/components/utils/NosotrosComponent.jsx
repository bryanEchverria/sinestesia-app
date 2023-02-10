import React,{useEffect, useState} from 'react'
import { Col, Card } from 'react-bootstrap'
import  dataJson from './nosotros.json'
import axios from 'axios'


export const NosotrosComponent = () => {

    const [data, setData] =useState([]);

    useEffect(() => {
        async function fetchData() {
          try {
            const res = await fetch(dataJson);
            const products = await res.json();
            setData(products);
          } catch (error) {
            console.error(error);
          }
        }
      
        fetchData();
      }, []);

  return (
   <>
    {
        dataJson.map((obj)=>{
            return(<>
                <Col  xs={12} md={3} >
                <Card key={obj.nombre}  className=' nosotros_Component'>
                    <Card.Body>
                        <img src={obj.image}></img>
                        <Card.Title>{obj.title}</Card.Title>
                        <Card.Text>{obj.description} </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </>)
        })
    }

   </>
  )
}
