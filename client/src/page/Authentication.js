import React,{ Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';

const Authentication = () =>{

    const schema = yup.object({
        email:yup.string().email().required("Email is required"),
        password:yup.string().required("Password is Required")
      });
      
    
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
                    console.log(JSON.stringify(values))
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
                            </Form>;
                        </Col>
                    </Row>
                </Container>
                )}
            </Formik>
        )
}

export default Authentication;