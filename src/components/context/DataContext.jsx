
import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from "react";
import { getProducts } from '../../provider/product.provider';
export const dataContext = createContext();

// {id:product._id, description:product.description,
//     image:product.image, name: product.name, price: product.price, amount:0}
const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);
    const preOrder = []
    const [cantidadProductos, setCantidadProductos] = useState({});
    const count = 0;

    useEffect(() => {
        getProducts().then(result => {
            setData(result);
        })
    }, [])


    const addAmount = (product) => {
        console.log('product', product)
        let productIndex = cart.findIndex((obj) => obj._id === product._id);
        if (productIndex === -1) {
            setCart([...cart,
            {
                _id: product._id, description: product.description,
                image: product.image, name: product.name, price:
                    product.price, amount: 1
            }]);
            setCantidadProductos({
                ...cantidadProductos,
                [product._id]: 1
            })
        }
        else {


            setCantidadProductos({
                ...cantidadProductos,
                [product._id]: cantidadProductos[product._id] + 1
            })
        }

    }

    const subtractAmount = (product) => {
        let productIndex = cart.findIndex((obj) => obj._id === product._id);
        let newCart = [...cart];
        newCart[productIndex] = {
            ...newCart[productIndex],
            cantidad: parseInt(newCart[productIndex].cantidad - 1)
        }
        setCantidadProductos({
            ...cantidadProductos,
            [product._id]: cantidadProductos[product._id] - 1
        })
    }

    const addToCart = () => {
        let preOrder = [];
        const preCompra = Object.entries(cantidadProductos).map(([id, amount]) => ({ id, amount }));
        preCompra.map(product => {
          let newPreOrder = data.find(obj => obj._id === product.id);
          newPreOrder.amount = product.amount;
          preOrder.push(newPreOrder);
        })
        console.log('preOrden', preOrder)
        if (preOrder.length > 0) {
          localStorage.setItem('localPreOrder', JSON.stringify(preOrder))
        } else {
          console.warn('carrito esta vacio');
        }
      }


    // configurando cookies

    // const addToCart = () => {
    //     const preCompra = Object.entries(cantidadProductos).map(([id, amount]) => ({ id, amount }));
    //     preCompra.map(product => {
    //         let newPreOrder = data.find(obj => obj._id === product.id);
    //         preOrder.push(Object.assign(newPreOrder,
    //             {
    //                 id: newPreOrder._id, image: newPreOrder.name,
    //                 price: newPreOrder.price, description: newPreOrder.description,
    //                 amount: product.amount
    //             }));
    //     })
    //     console.log('preOrden', preOrder)
    //     if (preOrder.length > 0) {
    //         // let encodedPreCompraJSON = encodeURIComponent(preCompraJSON);
    //         localStorage.setItem('localPreOrder', JSON.stringify(preOrder))
    //     } else {
    //         console.warn('carrito esta vacio');
    //     }
    // }

    return <dataContext.Provider value={{
        data, cart, setCart,
        addAmount, subtractAmount, cantidadProductos, addToCart
    }}>
        {children} </dataContext.Provider>
}


export default DataProvider;