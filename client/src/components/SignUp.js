import React from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { registerUser } from '../actions/actionCreators';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";

const schema = yup.object({
  username: yup.string().required("Username is required"),
  email:yup.string().email().required("Email is required"),
  password:yup.string().min(8,"Password must be at least 8 characters").required("Password is Required"),
  passwordConfirmation:yup.string().min(8).required("Password Confirmation id required")
  .oneOf([yup.ref('password'), null], 'Passwords must match')
});

class SignUp extends React.Component{

  state={
    serverErrors:null,
    password:{
      type:"password",
      hidden: true,
      visibleIcon:"eye"
    },
    passwordConfirmation:{
      type:"password",
      hidden: true,
      visibleIcon:"eye"
    }
  }

  handlePasswordVisibleState=(passwordField)=>{
    const hidden = !this.state[passwordField].hidden;
    this.setState({
        [passwordField]:{
          type: hidden ? "password" : "text",
          hidden,
          visibleIcon: hidden ? "eye" : "eye-slash"
        }
    })
  }

  render(){
    const { password,passwordConfirmation }=this.state;
    const { dispatch,registering,history }=this.props;
    if(registering==="done"){
      history.push("/login")
    }
    return (
      <Formik
        validationSchema={schema}
        onSubmit={ async (values, { setSubmitting })=>{
          await dispatch(registerUser(values))
          setSubmitting(false) 
        }}
        initialValues={{
          email: '',
          username: '',
          password:'',
          passwordConfirmation:''
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
          <Row>
              <Col md={{span:6, offset: 3}}>   
                  <Form onSubmit={ handleSubmit}>
                      <Form.Group controlId="formBasicUsername">
                          <Form.Label>Username</Form.Label>
                          <Form.Control 
                            type="text" name="username" 
                            onChange={ handleChange } 
                            onBlur={ handleBlur } 
                            placeholder="Enter Username" 
                            value={ values.username } 
                            isInvalid={!!errors.username }
                            isValid={errors.username===undefined && touched.username}
                          />
                          <Form.Control.Feedback type="invalid">
                              {errors.username}
                          </Form.Control.Feedback>
                          <Form.Text className="text-muted">
                          </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control 
                            type="email" name="email" 
                            onChange={ handleChange} 
                            onBlur={ handleBlur } 
                            placeholder="Enter email" 
                            value={ values.email } 
                            isInvalid={!!errors.email}
                            isValid={errors.email===undefined && touched.email}
                          />
                          <Form.Control.Feedback type="invalid">
                              {errors.email}
                          </Form.Control.Feedback>
                          <Form.Text className="text-muted">
                          </Form.Text>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <InputGroup>
                            <Form.Control 
                              type={password.type} 
                              name="password" 
                              value={ values.password }
                              onBlur={ handleBlur } 
                              onChange={ handleChange } 
                              placeholder="Enter password"
                              isInvalid={!!errors.password}
                              isValid={ errors.password === undefined && touched.password }
                            />
                            <InputGroup.Append>
                              <InputGroup.Text onClick={()=>this.handlePasswordVisibleState("password")}><FontAwesomeIcon icon={password.visibleIcon}/></InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                          </InputGroup>
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password Confirmation</Form.Label>
                          <InputGroup>
                            <Form.Control type={passwordConfirmation.type} 
                              name="passwordConfirmation" 
                              value={ values.passwordConfirmation } 
                              onChange={ handleChange } 
                              placeholder="Confirm the password" 
                              isInvalid={!!errors.passwordConfirmation}
                              isValid={ errors.passwordConfirmation === undefined && touched.passwordConfirmation }
                            />
                            <InputGroup.Append>
                              <InputGroup.Text onClick={()=>this.handlePasswordVisibleState("passwordConfirmation")}><FontAwesomeIcon icon={passwordConfirmation.visibleIcon}/></InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback>
                          </InputGroup>
                      </Form.Group>
                      <Form.Text>
                            Already have an account? <Link to="/login"><Button variant="warning">Log In</Button></Link>
                        </Form.Text>
                      <Button variant="primary" type="submit" disabled={ isSubmitting }>
                          Sign Up
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
const mapStateToProps=({ auth })=>{
  return {
    registering: auth.registering
  }
}
export default connect(mapStateToProps)(SignUp);