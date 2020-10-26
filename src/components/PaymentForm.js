import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import '../components/styles/paymentform.css';
import { useState } from 'react';

const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focus: '',
  });

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocusChange = (e) => {
    setState({
      ...state,
      focus: e.target.name,
    });
  };

  const processPayment = () => {
    console.log('nmber =>', state.number);
    console.log('name =>', state.number);
    console.log('expiry =>', state.number);
    console.log('cvc =>', state.number);
    console.log(JSON.stringify(state));
  };

  return (
    <div className="layout">
      <div className="card-body-card">
        <Cards
          number={state.number}
          name={state.name}
          expiry={state.expiry}
          cvc={state.cvc}
          focused={state.focus}
        />
        <form action="">
          <div className="form-group">
            <label htmlFor="number">Numero</label>
            <input
              type="text"
              name="number"
              id="number"
              maxLength="16"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              maxLength="45"
              onChange={handleInputChange}
              onFocus={handleFocusChange}
            />
          </div>
          <div className="row">
            <div className="form-group">
              <label htmlFor="expiry">Fecha de expriracion</label>
              <input
                type="text"
                name="expiry"
                id="expiry"
                maxLength="4"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvd">CVC</label>
              <input
                type="text"
                name="cvc"
                id="cvc"
                maxLength="4"
                onChange={handleInputChange}
                onFocus={handleFocusChange}
              />
            </div>
          </div>
          <button onClick={processPayment} type="button">
            pagar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
