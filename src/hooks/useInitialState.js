import  { useState, useEffect } from 'react';
/* import initialState from '../initialState' */
const API = 'https://apirestshoop.herokuapp.com/servicios/productos/';
const API2 = 'https://apirestshoop.herokuapp.com/servicios/categorias/';

const useInitialState = ()=> {
 /*  const { state, setState } = useState(initialState); */
  const [ cart, setCart ] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

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






  return {
    cart,
    setCart,
    category,
    products,
    setProducts,
  };

};

export default useInitialState;

