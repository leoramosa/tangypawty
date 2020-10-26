import React, { useState, useEffect } from 'react';
import './styles/Login.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Login() {
  const [flag, setFlag] = useState(0);
  const [loading, setLoading] = useState(1);
 /*  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(1);
  }; */
 
  const [inputType, setInputType] = useState('password');
  const clickHandle = (e) => {
    setFlag((prev) => prev ^ 1);
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) return setLoading(0);
  },[setInputType, loading]);


  return (
    <div className={flag === 0 ? 'container1' : 'container1 sign-up-mode'}>
      <div className="forms-container" style={{ width: '100%' }}>
        <div className="signin-signup">
          <form className="sign-in-form">
            <h2 className="title">Iniciar sesión</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input name="email" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              {/* <div
                  style={{
                    border: "0 solid #FFF",
                    borderLeftColor: "#acacac"
                  }}
                > */}
              <input name="password" type={inputType} placeholder="Password" />

              {/* </div> */}
            </div>
            <input type="submit" value="Login" className="btnlogin solid" />
            <Link to="/forget">Olvidaste tu contraseña?</Link>
          </form>
          <form className="sign-up-form">
            <h2 className="title">Registrarme</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input name="name" type="text" placeholder="Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input name="email" type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-phone" />
              <input type="text" name="number" placeholder="Contact Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input name="password" type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <input type="submit" className="btnlogin" value="Sign up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Nuevo Aquí ?</h3>
            <p>Registrate y compra nuestra promociones!</p>
            <Button
              className="btnlogin transparent"
              id="sign-up-btn"
              onClick={clickHandle}
            >
              Registrate
            </Button>
          </div>
          <img
            src={require('../images/dog-login.svg')}
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Inicia sesión</h3>
            <p>Ve nuestras promociones!</p>
            <button
              className="btnlogin transparent"
              onClick={clickHandle}
              id="sign-in-btn"
            >
              Login
            </button>
          </div>
          <img
            src={require('../images/register.svg')}
            className="image"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
