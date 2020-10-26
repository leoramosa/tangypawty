import React from 'react';
import ReactDOM from 'react-dom';
import CheckIcon from '@material-ui/icons/Check';
import '../components/styles/ModalAddCart.css';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    backgroundColor: '#4361ee',
    '&:hover': {
      backgroundColor: '#364fc5',
    },
    marginTop: 20,
    textDecoration: 'none',
    color: '#ffffff',
    textTransform: 'lowercase',
    fontSize: 18,
  },
}));

function ModalAddProduct(props) {
  const classes = useStyles();
  if (!props.showModal) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container animate__animated animate__bounce animate__flipInY">
        <button onClick={props.CloseModal} className="Modal__close-button">
          X
        </button>
        <div className="Modal__container-element">
          <div className="element__icon">
            <CheckIcon style={{ fontSize: 40, color: 'ffffff' }} />
          </div>
          <div className="element__description">
            <p className="element__sale">Producto agregado al carrito</p>
            <Link className="btn-gocart" to="/cart">
              <Button className={classes.button} fullWidth={true}>
                ir al carrito
              </Button>
            </Link>

            <p className="continure_sale">
              <span onClick={props.CloseModal} href="#">
                seguir comprando
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modaladdcart')
  );
}

export default ModalAddProduct;
