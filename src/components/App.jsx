import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PetHome from '../pages/PetHome';

import Pruebadetalle from '../pages/Pruebadetalle';
import HomeProducts from '../pages/HomeProducts';
import HomeCategorias from '../pages/HomeCategorias';
import pago from './PaymentForm';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import Delivery from '../pages/payment/Delivery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import '../components/styles/app.css';
import Layout from './Layout'
import LayoutCart from './LayoutCart'
import useInitialState from '../hooks/useInitialState';



function App() {
  const initialState = useInitialState();
  return (

    <BrowserRouter>
      <AppContext.Provider value={initialState}>
          <Switch>
            <Route exact path="/" >
              <Layout>
                <PetHome/>
              </Layout>
            </Route>
            <Route exact path="/productos">
              <Layout>
                <HomeProducts/>
              </Layout>
            </Route>

            <Route exact path="/productos/:id/" >
              <Layout>
                <Pruebadetalle/>
              </Layout>
            </Route>

            <Route exact path="/categoria/:id/">
              <Layout>
                <HomeCategorias/>
              </Layout>
            </Route>

            <Route exact path="/cart" >
              <LayoutCart>
                  <Cart/>
              </LayoutCart>
            </Route>
            <Route exact path="/delivery" >
              <LayoutCart>
                  <Delivery/>
              </LayoutCart>
            </Route>
            <Route exact path="/cart" >
                <Cart/>
            </Route>
            <Route exact path="/cart" >
                <Cart/>
            </Route>
 
            <Route exact path="/pago" component={pago} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
