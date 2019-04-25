

import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Nav, Form, FormControl, Button, Navbar } from 'react-bootstrap';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faFire, faCertificate, faBriefcase } from  "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './page/Home';
import Authentication from './page/Authentication';
import Lessons from './page/Lessons';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Footer from './components/Footer';

import { connect } from 'react-redux';
import toastMessages from './utils/flash';
import { updateLoginState,logout, alertFailure } from './actions/actionCreators';
import './App.css';


library.add(faEye,faEyeSlash,faFire,faCertificate,faBriefcase)

class App extends Component {

  UNSAFE_componentWillReceiveProps(nextProps){
    const { flash,auth,dispatch}=nextProps;

    if (flash) toastMessages(flash);
    const userData=localStorage.getItem("users");
    if(userData){
      console.log(JSON.stringify(userData));
      if(auth.login===null || auth.login==="pending"){
        dispatch(updateLoginState(userData))
      }
    }

  }

  render() {
    const { auth,dispatch }=this.props;

    return (
      <Fragment>
      <Router>
        <Fragment>
          <ToastContainer/>
            <Navbar bg="primary" variant="dark">
              <Navbar.Brand href="#home">WE Code</Navbar.Brand>
              <Nav className="mr-auto">
              <NavLink className="nav-link" to="/">
                  Home
              </NavLink>
              { auth.login === "done"?
                <Fragment>
                  <NavLink className="nav-link" to="/profile">
                  {auth.user.username}'s Profile
                  </NavLink>
                  <Button variant="danger" onClick={()=>dispatch(logout())}>
                    Logout
                  </Button>
                </Fragment>
                :
                <Fragment>
                  <NavLink className="nav-link" exact to="/login">
                    Log In
                  </NavLink>
                  <NavLink className="nav-link" exact to="/signup">
                    Sign Up 
                  </NavLink>
                </Fragment>
              }
            </Nav>
            <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup" component={Profile} />
        </Fragment>
      </Router> 
      <Footer>
          <p className="text-center">
            Copyright 2019 Gilbert
          </p>
      </Footer>
      </Fragment>
    );
  }
}

const mapStateToProps=( state )=>{
  return {
    flash: state.flash, 
    auth:state.auth
  }
}




export default connect(mapStateToProps)(App);
