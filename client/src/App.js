
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Login from './page/Login';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './fonts.css';
import './App.css';


library.add(faSearch)

const App = props => (
  <Fragment>
    <Router>
    <Header />
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
      </Fragment>
    <Footer />
    </Router>
  </Fragment>
);

export default App;
