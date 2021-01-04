import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../components/styles/ModalCart.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import  AppContext  from '../context/AppContext';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import Dogsad from '../images/dogsad.png';
const useStyles = makeStyles({
  list: {
    width: 400,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#6c5ce7',
      color:'white'
    },
    marginTop: 0,
    padding: 0,
    textDecoration: 'none',
    color: '#6c5ce7',
    textTransform: 'lowercase',
    width: 23,
    height: 23,
    minInlineSize: 'auto',
    display: 'block',
    border:'#dcd7f7 1px solid'
  },
  button2: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#6c5ce7',
      color: 'white',
    },
    width: '100%',
    color: '#6c5ce7',
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: 'capitalize',
    borderRadius: 2,
    border: 1,
    borderColor: '#6c5ce7',
    borderStyle: 'solid',
  },
  button3: {
    backgroundColor: '#6c5ce7',
    '&:hover': {
      backgroundColor: '#5c4dc8',
    },

    width: '100%',
    color: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: 'none',
    borderRadius: 2,
    textDecoration: 'none',
  },
});

const ModalCart =(props) => {
  let { cart, setCart } = useContext(AppContext);
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



  

  const classes = useStyles();
  if (!props.showModalCart) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modalcart ">
      <div className="Modalcart__container animate__animated animate__bounce animate__fadeInRight">
        <div className="Modalcart__container-element ">
          {cart.length > 0 ? (
            <div className="container-cartmodal">
              <div className="content-product">
                {cart.map((item, i) => {
                  return (
                    <div className="cart__product" key={ i}>
                      <div className="cart__quanty">
                        <Button className={classes.button} 
                        title="Agregar uno"
                        onClick={() => reduction(item)}
                        >
                          -
                        </Button>
                        <div className="content-count">
                        {item.count}
                        </div>
                        <Button className={classes.button}
                        onClick={() => increase(item)}
                        >
                          +
                        </Button>
                      </div>
                      <div className="cart-imgmodal">
                        <img className="cart__img--" src={item.imagen} alt="" />
                      </div>
                      <div className="cart_title-product">
                        <div className="title-product-id">
                        {item.nombre} - {item.colores} - {item.tallas}
                        </div>
                        <div className="cart__price">
                          <p>S/. {(item.precio).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="cart__btn-delete-modal">
                        <Link to="#" title="eiminar" className="btn-svg">
                          <DeleteIcon
                            alt="eliminar uno"
                            onClick={()=> removeProduct(item)}
                          />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="cart__price-btn">
                <div className="cart__subtotal">
                  <p>Subtotal</p>
                  <p>S/ {total.toFixed(2)}</p>
                </div>
                <div className="cart__total">
                  <p>Subtotal</p>
                  <p>S/ {total.toFixed(2)}</p>
                </div>
                <div className="cart__btn-sale">
                  <div className="close-modal-cart">
                    <Button
                      onClick={props.CloseModalCart}
                      className={classes.button2}
                    >
                      Cerrar
                    </Button>
                  </div>
                  <div className="sale-cart">
                    <Link className="venta" to="/cart">
                      <Button
                        onClick={props.CloseModalCart}
                        className={classes.button3}
                      >
                        Ir al carrito
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-cartmodal">
              <div className="content-product-close">
                <div className="content__dog">
                  <div className="dog-close">
                    <img className="dogsad" src={Dogsad} alt="" />
                  </div>
                  <p className="cart-vacio">Tu carrito está vacío</p>
                </div>
              </div>
              <div className="cart__price-btn">
                <div className="cart__btn-sale">
                  <div className="sale-cart">
                    <Button
                      onClick={props.CloseModalCart}
                      className={classes.button3}
                    >
                      Cerrar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modalcart')
  );
}

export default ModalCart;
