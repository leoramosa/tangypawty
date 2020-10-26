import React, { useContext, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import '../components/styles/ModalCart.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../context/AppContext';
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
    backgroundColor: '#4361ee',
    '&:hover': {
      backgroundColor: '#364fc5',
    },
    marginTop: 0,
    padding: 0,
    textDecoration: 'none',
    color: '#ffffff',
    textTransform: 'lowercase',
    width: 25,
    height: 25,
    minInlineSize: 'auto',
    display: 'block',
  },
  button2: {
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: '#4539ab',
      color: 'white',
    },
    width: '100%',
    color: '#4539ab',
    paddingTop: 15,
    paddingBottom: 15,
    textTransform: 'capitalize',
    borderRadius: 2,
    border: 1,
    borderColor: '#4539ab',
    borderStyle: 'solid',
  },
  button3: {
    backgroundColor: '#4539ab',
    '&:hover': {
      backgroundColor: '#364fc5',
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

function ModalCart(props) {
  let { cart, setCart } = useContext(AppContext);
  let [total, setTotal] = useState(0);
  useEffect(() => {
    calcularTotal();
    function calcularTotal() {
      let suma = cart.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
      setTotal(suma.toFixed(2));
    }
  }, [cart]);
  
  function quitarProducto(idprod) {
    // idprod= 10 <= el id que quiero quitar de la lista
    // carrito [3,6,9,10,45,23]
    // nCarrito [3,6,9,45,23]
    let nCart = cart.filter((item) => item.id !== idprod);
    setCart(nCart);
    localStorage.setItem('cart', JSON.stringify(nCart));
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
                {cart.map((item) => {
                  return (
                    <div className="cart__product" key={item.id}>
                      <div className="cart__quanty">
                        <Button className={classes.button} title="Agregar uno">
                          <i className="fas fa-angle-up"></i>
                        </Button>
                        {item.cantidad}
                        <Button className={classes.button}>
                          <i className="fas fa-angle-down"></i>
                        </Button>
                      </div>
                      <div className="cart-imgmodal">
                        <img className="cart__img--" src={item.img} alt="" />
                      </div>
                      <div className="cart_title-product">
                        {item.nombre}
                        <div className="cart__price">
                          <span>Precio unidad</span>
                          <p>S/. {item.precio}</p>
                        </div>
                      </div>
                      <div className="cart__btn-delete-modal">
                        <Link to="#" title="eiminar" className="btn-svg">
                          <DeleteIcon
                            alt="eliminar uno"
                            onClick={quitarProducto.bind(this, item.id)}
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
                  <p>S/ {total}</p>
                </div>
                <div className="cart__total">
                  <p>Subtotal</p>
                  <p>S/ {total}</p>
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
