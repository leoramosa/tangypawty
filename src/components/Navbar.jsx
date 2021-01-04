import React, { useState, useContext } from 'react';

import './styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import  AppContext  from '../context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import LogoPet from '../images/logo.png';
import Badge from '@material-ui/core/Badge';
import ModalCart from './ModalCart';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  badges: {
    '& .MuiBadge-badge': {
      background: '#17d2c9',
      color: 'black',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { cart } = useContext(AppContext);

  const [clicked, setClicked] = useState(false);

  const [showModalCart, setShowModalCart] = useState(false);

  const OpenModalCart = () => {
    setShowModalCart(true);
  };
  const CloseModalCart = () => {
    setShowModalCart(false);
  };

  return (
    <div id="containerNav">
      <div className="content-nav">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            <NavLink to={'/'}>
          
            <img src={LogoPet} alt="" />
            </NavLink>
          </h1>
          <div
            className="menu-icon"
            onClick={() => setClicked((clicked) => !clicked)}
          >
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <div className="cart-mobile">
            <li className="carticon" onClick={OpenModalCart}>
              <Badge className={classes.badges} badgeContent={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            </li>
          </div>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="activeLink"
                onClick={() => setClicked((clicked) => !clicked)}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/productos"
                onClick={() => setClicked((clicked) => !clicked)}
                className="nav-links"
                activeClassName="activeLink"
              >
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink
                 to="/select"
                className="nav-links"
                onClick={() => setClicked((clicked) => !clicked)}
              >
                Contacto
              </NavLink>
            </li>
            <li className="cart-desktop" onClick={OpenModalCart}>
              <Badge className={classes.badges} badgeContent={cart.length}>
                <ShoppingCartIcon />
              </Badge>
            </li>
            <ModalCart
              CloseModalCart={CloseModalCart}
              showModalCart={showModalCart}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
