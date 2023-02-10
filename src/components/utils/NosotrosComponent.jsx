import React,{useEffect, useState} from 'react'
import { Col, Card } from 'react-bootstrap'
import  dataJson from './nosotros.json'
import axios from 'axios'


export const NosotrosComponent = () => {




  return (
   <>
    {
        dataJson.map((obj,index)=>{
          
            return(
                <Col xs={12} md={3} key={index} >
                <Card  className='nosotros_Component'>
                    <Card.Body>
                        <img src={obj.image}></img>
                        <Card.Title>{obj.title}</Card.Title>
                        <Card.Text>{obj.description} </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            )
        })
    }

   </>
  )
}
