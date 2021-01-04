import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PetHome from '../pages/PetHome';
import Pruebadetalle from '../pages/Pruebadetalle';
import HomeProducts from '../pages/HomeProducts';
import HomeCategorias from '../pages/HomeCategorias';
import pago from './PaymentForm';
import NotFound from '../pages/NotFound';
import {DataProvider} from '../context/AppContextPrueba';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import '../components/styles/app.css';
import Layout from './Layout'
import useInitialState from '../hooks/useInitialState';


function App() {
  const initialState = useInitialState();
  return (

    <BrowserRouter>
      <DataProvider>
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

            <Route exact path="/prueba/:id/" >
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
              
                <Cart/>
              
            </Route>
 
            <Route exact path="/pago" component={pago} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
