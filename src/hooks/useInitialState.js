import  { useState, useEffect } from 'react';
/* import initialState from '../initialState' */
const API = 'http://127.0.0.1:8000/servicios/productos/';
const API2 = 'http://127.0.0.1:8000/servicios/categorias/';
const API3 = 'http://127.0.0.1:8000/servicios/portadas/';

const useInitialState = ()=> {
 /*  const { state, setState } = useState(initialState); */
  const [ cart, setCart ] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [cover, setCover] = useState([]);

  useEffect( () => {
   const dataCart= JSON.parse(localStorage.getItem('dataCart'))
   if(dataCart) setCart(dataCart)
  }, []);

  useEffect( () => {
    localStorage.setItem('dataCart', JSON.stringify(cart))
  }, [cart]);

  useEffect( () => {
    getProduct()
    getCategory()
    getCover()
  }, []);

  const getProduct = async () => {
    const data = await fetch(API)
    const product = await data.json()
    setProducts(product)
  }

  const getCategory = async () => {
    const data = await fetch(API2)
    const category = await data.json()
    setCategory(category)
  }

  const getCover = async () => {
    const data = await fetch(API3)
    const covers = await data.json()
    setCover(covers)
  }


  return {
    cart,
    setCart,
    category,
    products,
    setProducts,
    cover,
    setCover
  };

};

export default useInitialState;

