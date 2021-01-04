import React from 'react'
import '../styles/HeaderPayment.css'
import logoPayment from '../../images/logo-payment.png'
import isoPayment from '../../images/iso-payment.png'
/* import { Link } from 'react-router-dom'; */
import { NavLink } from "react-router-dom";

const HeaderPayment = () => {
  return (
    <div>
      <div className="content_headerP">
        <div className="content_headerP-width">
          <div className="headerP-logo-first">
            <div className="content-logo-first">
              <NavLink activeClassName="current" exact to={'/'}>
                <img src={logoPayment} alt=""/>
              </NavLink>
            </div>
          </div>
          <div className="headerP-steps">
            <div className="headerP-logo">
             {/*  <Link to="/cart">
              <div className="headerP-iso">
                <div className="headerP-iso-content">
                  <img src={isoPayment} alt=""/>
                </div>
              </div>
              <div className="headerP-title-one">
              Carrito de Compras
              </div>
              </Link> */}
              <div className="HeaderP-steps-content">
              <NavLink className="linkRouter" activeClassName="activeLink" exact to="/cart">
              <div className="headerP-step-circle">
                <div className="headerP-iso-content">
                  <img src={isoPayment} alt=""/>
                </div>
              </div>
              <p>Carrito</p>
              </NavLink>
              </div>
              
            </div>
            <div className="separator"></div>
            <div className="HeaderP-steps-content">
              <NavLink className="linkRouter" activeClassName="activeLink" exact to="/delivery">
              <div className="headerP-step-circle">
                1
              </div>
              <p>Despacho</p>
              </NavLink>
            </div>
            <div className="separator" ></div>
            <div className="HeaderP-steps-content">
              <NavLink  className="linkRouter" to="/pay">
              <div className="headerP-step-circle">2</div>
              <p>Pago</p>
              </NavLink>
            </div>
            <div className="separator" ></div>
            <div className="HeaderP-steps-content">
              <NavLink  className="linkRouter" to="/confirmation">
              <div className="headerP-step-circle">3</div>
              <p>Confirmacion</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderPayment;
