import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PetHome from '../pages/PetHome';
import DetailsProduct from '../pages/DetailsProduct';
import HomeProducts from '../pages/HomeProducts';
import HomeCategorias from '../pages/HomeCategorias';


import pago from '../components/PaymentForm';
import NotFound from '../pages/NotFound';
import { AppProvider } from '../context/AppContext';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css/animate.min.css';
import Layout from './Layout';
import '../components/styles/app.css';
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={PetHome} />
            <Route path="/cart" component={Cart} />
            <Route exact path="/products/" component={HomeProducts} />
            <Route exact path="/productos/:id/" component={DetailsProduct} />
            
            <Route exact path="/pago" component={pago} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/categoria/productos/:id/"
              component={HomeCategorias}
            />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
