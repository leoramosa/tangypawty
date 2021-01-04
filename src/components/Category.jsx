import React from 'react';
import '../pages/styles/HomeProduct.css';
import { Link } from 'react-router-dom';
import './styles/Category.css'
const Category = ({ category}) => {


  return (
    <div className=" ">
      <div className="content-category">
            <div  className="listacategoria">
              <Link className="linkapp" to="/productos" >
                <div className="icon-link">
                  <p>Todos</p>
                </div>
              </Link>
            </div>
        {category.map((cat) => {
          return (
            <div key={cat.id} className="listacategoria">
              <Link className="linkapp" to={`/categoria/${cat.id}`} >
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
