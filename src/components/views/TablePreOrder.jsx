import React, { useContext, useEffect,useState,useCallback } from 'react'
import Table from 'react-bootstrap/Table';
import { Col } from 'react-bootstrap';
import { dataContext } from '../context/DataContext.jsx';
const TablePreOrder = () => {

  const [preOrder,setPreOrder]= useState([]);


  const getPreOrderFromLocalStorage = useCallback(() => {
    const preOrderJSON= localStorage.getItem('localPreOrder');
    if(preOrderJSON){
      return JSON.parse(preOrderJSON)
    }else{
      return [];
    }
  })


  console.log('preroden',preOrder);
  useEffect(()=>{
    setPreOrder(getPreOrderFromLocalStorage());
  },[]);
 
  return (
    <Col xs={6}>
      <Table className='table_container' >
      <thead>
        <tr>
          <th>#</th>
          <th>imagen</th>
          <th>producto</th>
          <th>cantidad</th>
          <th>precio</th>
          <th><button>agregar</button>/quitar</th>
       
          
        </tr>
      </thead>
      <tbody>
        
        {
          preOrder.map((obj, index)=>
          <tr>
          <td>{index+1}</td>
          <td><img src={obj.image.secure_url} /></td>
          <td> {obj.name} </td>
          <td>{obj.amount}</td>
          <td>{obj.price}</td>
          <td><button onClick={()=>{addAmount(obj)}}>+</button> - <button>-</button></td>
        
        </tr>    
          )
        }
 
      </tbody>
    </Table>
    </Col>

  )
}

export default TablePreOrder