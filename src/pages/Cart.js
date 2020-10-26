import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles/Cart.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > svg': {
      margin: theme.spacing(2),
      color: '#ff0000',
      fill: '#ff0000',
      backgroundColor: '#ff0000',
    },
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
function Cart() {
  const classes = useStyles();
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

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          {cart.map((item) => {
            return (
              <div className="content__product" key={item.id}>
                <div className="img_title">
                  <div className="img_content">
                    <img className="imgname" src={item.img} alt="" />
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
                    <p>{item.cantidad}</p>
                  </div>
                  <div className="price_unidad">
                    <p>Precio Unidad</p>
                    <p>S/ {(item.precio).toFixed(2)}</p>
                  </div>
                  <div className="price_total">
                    <p>Precio Total</p>
                    <p className="price_total_finally">
                      S/ {(item.cantidad * item.precio).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="btn__delete">
                  <div className="btn__delete-content">
                    <Link to="#" title="eiminar" className="btn-svg">
                      <DeleteIcon
                        alt="eliminar uno"
                        onClick={quitarProducto.bind(this, item.id)}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </Grid>
        <Grid>
          <div className="">
            <p>{total}</p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default Cart;
