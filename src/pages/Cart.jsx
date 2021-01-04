import React, { useContext, useState, useEffect } from 'react';
import AppContext  from '../context/AppContext';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > svg': {
      margin: theme.spacing(2),
      color: '#ff0000',
      fill: '#ff0000',
      backgroundColor: '#ff0000',
    },
    backgroundColor:"#f4f4f4"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    boxShadow: 'none',
  },
  '& > svg': {
    margin: theme.spacing(2),
    color: '#ff0000',
    fill: '#ff0000',
    backgroundColor: '#ff0000',
  },
}));
const Cart = () => {
  const classes = useStyles();
  const { cart, setCart } = useContext(AppContext);
  let [total, setTotal] = useState(0);


  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.precio * item.count)
      },0)
      setTotal(res)
    }
    getTotal()
  }, [cart])

  const reduction = i => {
    cart.forEach(item => {
      if(item === i) {
        item.count === 1 ? item.count = 1 : item.count -= 1;
      }
    })
    setCart([...cart])
  }

  const increase = i => {
    cart.forEach(item => {
      if(item === i) {
        item.count += 1 ;
      }
    })
    setCart([...cart])
  }

  const removeProduct = i => {
      cart.forEach((item, index) => {
        if(item === i){
          cart.splice(index, 1)
        }
      })
      setCart([...cart])
  }


  return (
    <div className={classes.root}>
      <div className="content_cart">
        {cart.length > 0 ?
        <div className="content_cart-content" >
        {cart.map((item, i) => (
            <div className="content__product" key={i}>
              <div className="img_title">
                <div className="img_content">
                  <img className="imgname" src={item.imagen} alt="" />
                </div>
                <div className="title_name">
                  <p className="title_name_product">
                    {item.nombre} - {item.colores} - {item.tallas}
                  </p>
                </div>
              </div>
              <div className="quanty__price">
                <div className="quanty_card">
                  <p>Cantindad</p>
                  <div className="quanty_card-count">
                    <div className="btn-count" onClick={() => reduction(item)}>-</div>
                    <div className="btn-count-one">
                        {item.count}
                    </div>
                  <div className="btn-count"
                  onClick={() => increase(item)}
                  >+</div>
                  </div>
                </div>
                <div className="price_unidad">
                  <p>Precio Unidad &nbsp; </p>  <p>S/ {(item.precio).toFixed(2)}</p>
                </div>
                <div className="price_total">
                  <p>Precio Total &nbsp;</p>
                  <p className="price_total_finally">
                    S/ {(item.count * item.precio).toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="btn__delete">
                <div className="btn__delete-content desktop">
                  <Link to="#" title="eiminar" className="btn-svg">
                    <DeleteIcon
                      alt="eliminar producto"
                      onClick={()=> removeProduct(item)}
                    />
                  </Link>
                </div>
                <div className="btn__delete-content mobile"
                 onClick={()=> removeProduct(item)}>
                  Eliminar
                </div>
              </div>
            </div>
          )
        )}
      
      <div className="content_cart-total">
        <div className=""> </div>
        <div className="content-payment">
        <div className="_cart-total-sub">
          <p>Subtotal:</p>
          <p>S/ {total.toFixed(2)}</p>
        </div>
        <div className="_cart-total-all">
          <p>Total normal:</p>
          <p>S/ {total.toFixed(2)}</p>
        </div>
        </div>
      </div>
      </div>

        :
        <div className="content_cart-content">
          not eines prod
        </div>
        }
        

      
      </div>
    </div>
  );
}
export default Cart;
