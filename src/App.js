import React from 'react';
import {useState} from 'react';
import signin from './pages/Signin';
import signup from './pages/SignUp';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Store from './redux/store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from 'components/Footer/Footer';
import Sidebar from './components/Sidebar'
//import Footer from 'components/Footer/socialIcons';

function App() {

const [isOpen, setIsOpen] = useState(false);
const toggle = () => {
    setIsOpen(!isOpen);
};

  return (
    <Provider store={Store}>
      <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={signin} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/services" component={Cars} />
        </Switch>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
