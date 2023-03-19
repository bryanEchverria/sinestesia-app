import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';
import { Form,Col } from 'react-bootstrap';
import React from 'react'


const PaginationComponent = (props) => {
  const { setPagina, pagina, maximo } = props;
  const [input, setInput] = useState(1);

  const onKeyDown = (e) => {

    if( e.keyCode === 13){
      setPagina( parseInt (e.target.value));
      if ( parseInt(e.target.value ) < 1 || 
            parseInt(e.target.value ) > Math.ceil( maximo) ||
            isNaN(parseInt(e.target.value)))
          {
            setPagina(1)    
            setInput(1)
          }
      else{
          setPagina (parseInt (e.target.value));
      };
    } 
}
  const nextPage= () => {
    setInput(parseInt(input) +1);
    setPagina(parseInt(pagina)+1);
  }

  const previousPage = () => {
    setInput(parseInt(input)-1);
    setPagina(parseInt(pagina)-1);
  };

  const onChange = (e) => {
    setInput(e.target.value);
  }

  return ( <>
  <Col md={3}>
    
    <Pagination className="pagination_container">
      <Pagination.First/>
      <Pagination.Prev    disabled = { pagina == 1 || pagina < 1 }  onClick={previousPage}  />
      <Form.Control autoComplete ='off' onKeyDown={(e)=>{onKeyDown(e)}} onChange={(e)=>{onChange(e)}} value={input} className='' type="text"/> 
      <Pagination.Next disabled={pagina == Math.ceil(maximo) || pagina > Math.ceil(maximo)} onClick={nextPage} />
      <Pagination.Last/>
    </Pagination>
    </Col>
  </>)
}


export default PaginationComponent
