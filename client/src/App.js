
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faCamera,faFire,faUserCircle, faCertificate, faBriefcase, faSpinner, faCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Login from './page/Login';
import Home from './page/Home';
import Footer from './components/Footer';
import './fonts.css';
import './App.css';


library.add(faEye, faEyeSlash, faCamera,faUserCircle, faFire, faCertificate, faBriefcase, faSpinner, faCircle, faCheckCircle)

const App = props => (
  <Fragment>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
      </Fragment>
    </Router>
    <Footer />
  </Fragment>
);

export default App;
