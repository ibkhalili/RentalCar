import React, { useState } from 'react';
import Login from './pages/Signin';
import Signup from './pages/SignUp';
import { Home } from './pages/Home';
import Cars  from './pages/Cars';
import  CarsDetails from './pages/carsDetails';
import Store from './redux/store.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from 'components/Footer/Footer';
import { Logout } from 'pages/Logout';
import { AdminPage } from 'pages/Administration/AdminPage';
import store from './redux/store.js';
import { NavSide } from 'components/navSide';


//import Footer from 'components/Footer/socialIcons';


function App() {
  return (
    <Provider store={Store}>
      <Router>
        <NavSide />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/services" component={Cars} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path='/services/:id' component={CarsDetails} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
