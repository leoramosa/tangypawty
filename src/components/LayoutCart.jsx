import React from 'react';
import './styles/Layout.css';
import HeaderPayment from '../pages/payment/HeaderPayment'


const LayoutCart =(props) => {
  /* const children = props.children; */

  return (
    <React.Fragment>
      <div className="layout-global">
        <HeaderPayment/>
        <div className="layout-content">
          <div className="">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default LayoutCart;
