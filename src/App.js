import React from 'react';
import signin from './pages/Signin';
import signup from './pages/SignUp';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Store from './redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/services" component={Cars} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
