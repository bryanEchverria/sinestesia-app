import { createContext, useEffect, useState } from "react";

import {  getProducts } from '../../provider/product.provider';
export const dataContext = createContext();

const DataProvider = ({ children })=>{


const [data, setData] = useState([]);
const [cart, setCart] = useState([]);

useEffect(()=>{
    getProducts().then( result =>{
        setData(result);
    });
},[]);


return <dataContext.Provider value ={{ data, cart, setCart }}> {children} </dataContext.Provider>

}


export default DataProvider;