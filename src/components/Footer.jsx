import React from 'react';
import './styles/Footer.scss';
import { Link } from 'react-router-dom';
import iconwhats  from './../images/whatsapp.png'
const Footer = () => {
  return (
    <div>
      <footer className="Footer">
        <div className="container-footer">
          <div className="column-footer">
            <div className="column-footer-content">
              <div className="box">
                <h3>Productos</h3>
                <ul>
                  <li>
                    <Link to="">Nuevos Productos</Link>
                  </li>
                  <li>
                    <Link to="">En oferta</Link>
                  </li>
                  <li>
                    <Link to="">Últimos productos</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column-footer-content">
              <div className="box">
                <h3>Acerca del Petshop</h3>
                <ul>
                  <li>
                    <Link to="">Sobre nosotros</Link>
                  </li>
                  <li>
                    <Link to="">Nuestras tiendas</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="column-footer-content">
              <div className="box contact-web">
                <h3>Contacto</h3>
                <input />
                <button>Enviar</button>
                <div className="number-contact">
                  <p>Direccion: Mongilardi Fidel Tubino Kongliari 258 - Piso 1,  San Miguel</p>
                   <p> <img src={ iconwhats } alt=""/> 966 554 555</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
