import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import { loginUser } from '../actions/actionCreators';

class Authentication extends React.Component{
      state={}
      static getDerivedStateFromProps(nextProps){
        const { login,history }=nextProps;
        if (login==="done") history.push("/profile")
        return null;
      }

      render(){
        const schema = yup.object({
            email:yup.string().email().required("Email is required"),
            password:yup.string().required("Password is Required")
          });

        const { dispatch }=this.props;

        return(
            <Formik
                validationSchema={schema}
                initialValues={
                   {
                    email:"",
                    password:""
                   }
                }
                onSubmit={(values, { setSubmitting })=>{
                    dispatch(loginUser(values));
                    setSubmitting(false)
                }}
            >
                {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
                  isSubmitting
                }) => (
                    <Container className="mt-3 mt-4">
                        <h1 className="text-center">Log In</h1>
                    <Row>
                        <Col md={{span:6, offset: 3}}>   
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email" 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur }
                                        placeholder="Enter email" 
                                        value={ values.emaill} 
                                        isInvalid={ !!errors.email }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="password" 
                                        value={ values.password } 
                                        onChange={ handleChange } 
                                        onBlur={ handleBlur }
                                        placeholder="Password" 
                                        isInvalid={ !!errors.password }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Text>
                                    Don't have an account? <Link to="/signup"><Button variant="warning">Sign Up</Button></Link>
                                </Form.Text>
                                <Button variant="primary" type="submit" disabled={ isSubmitting }>
                                    Log In 
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                )}
            </Formik>
        )
      }
      
    
}

const mapStateToProps=( state )=>{
    return {
      login:state.auth.login
    }
  }

export default connect(mapStateToProps)(Authentication);