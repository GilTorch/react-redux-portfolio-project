

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faFire, faCertificate, faBriefcase, faSpinner,faCircle,faCheckCircle } from  "@fortawesome/free-solid-svg-icons";
import Home from './page/Home';
import Footer from './components/Footer';
import './fonts.css';
import './App.css';


library.add(faEye,faEyeSlash,faFire,faCertificate,faBriefcase,faSpinner,faCircle,faCheckCircle)

class App extends Component {

  state={}

  render() {

    return (
      <Fragment>
      <Router>
        <Fragment>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Router> 
      <Footer>
          <p className="text-center">
            &copy;Copyright 2019 Gilbert
          </p>
      </Footer>
      </Fragment>
    );
  }
}

export default App;
