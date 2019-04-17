import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap'

import Home from './page/Home';
import Authentication from './page/Authentication'
import Lessons from './page/Lessons'
import SignUp from './components/SignUp'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">WE Code</Navbar.Brand>
              <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">
                  Home
              </NavLink>
              <NavLink className="nav-link" to="/lessons">
                  Lessons
              </NavLink>
              <NavLink className="nav-link" exact to="/login">
                  Log In
              </NavLink>
            </Nav>
            <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/signup" component={SignUp} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
