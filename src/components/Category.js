import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/styles/HomeProduct.css';
import { Link } from 'react-router-dom';
import './styles/Category.css'

function Category() {
  const [homecatego, setGate] = useState([]);
  useEffect(() => {
    axios
      .get('https://apirestshoop.herokuapp.com/servicios/categorias/')
      .then((res) => {
        setGate(res.data);
      });
  }, []);

  return (
    <div className=" ">
      <div className="content-category">
        {homecatego.map((cat) => {
          return (
            <div key={cat.id} className="listacategoria">
              <Link className="linkapp" to={'/categoria/productos/' + cat.id}>
                <div className="icon-link">
                <img
                    className="img-fluid image-product"
                    src={cat.iconcategory}
                    alt=""
                  />
                  <p>{cat.nombrecategoria}</p>
                </div>
               
              </Link>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
