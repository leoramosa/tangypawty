import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios'
export const DataContext = createContext();
const API = 'https://apirestshoop.herokuapp.com/servicios/productos/';
const API2 = 'https://apirestshoop.herokuapp.com/servicios/categorias/';

export const DataProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [cart, setCart] = useState([])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=> {
      const response = await axios(API);
      setProducts(response.data);
    }, [])

    useEffect( () => {
      getCategory()
    }, []);
  
  
    const getCategory = async () => {
      const data = await fetch(API2)
      const category = await data.json()
      setCategory(category)
    }



    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The product has been added to cart.")
        }
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        category: [category, setCategory],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
