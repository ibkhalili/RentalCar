import React, { useState } from 'react';
import Login from './pages/Signin';
import Signup from './pages/SignUp';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Store from './redux/store.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from 'components/Footer/Footer';
import Sidebar from './components/Sidebar';
import { Logout } from 'pages/Logout';
import { AdminPage } from 'pages/Administration/AdminPage';

//import Footer from 'components/Footer/socialIcons';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Provider store={Store}>
      <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/services" component={Cars} />
          <Route exact path="/admin" component={AdminPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
