import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Layout.css';

function Layout(props) {
  /* const children = props.children; */

  return (
    <React.Fragment>
      <div className="layout-global">
        <Navbar />
        <div className="layout-content">
          <div className="">{props.children}</div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
