import React,{ Component } from 'react';
import { Form, Button, Container, Row, Col,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state={
            payload:{
                username:"",
                email:"",
                password:"",
                passwordConfirmation:"",
            },
            errors:null,
            samePassword:false,
            notEqualWarning: null
        }
    }

    handleChange=(event)=>{
        this.setState({
            ...this.state,
            payload:{
                ...this.state.payload,
                [event.target.name]: event.target.value
            }
        },()=>{
            const passwordsAreEqual=this.state.payload.password === this.state.payload.passwordConfirmation ;
            this.setState({
                samePassword: passwordsAreEqual,
                notEqualWarning: passwordsAreEqual ? null : "Make sure that both passwords are equal."
            })
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.samePassword){
            fetch("http://localhost:3001/users", {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.payload)
            }).then(async (response)=>{
                if(response.ok){
                    return response.text()
                }
                const jsonResponse = await response.json();
                return jsonResponse;
            })
            .then(function(text) {                          // second then()
                console.log('Request successful', text);  
              })  
              
        }else{
            const passwordsAreEqual=this.state.password === this.state.passwordConfirmation ;
            this.setState({
                
                samePassword: passwordsAreEqual,
                notEqualWarning: passwordsAreEqual ? null : "Make sure that both passwords are equal."
            })
        }   
    }
    
    render(){
        const { handleChange,handleSubmit } = this;
        const { samePassword,notEqualWarning,errors }=this.state;
        const { email,username,password,passwordConfirmation }=this.state.payload;

        return(
            <div>
                <Container className="mt-3 mt-4">
                    <Row>
                        <Col md={{span:6, offset: 3}}>   
                            <Form onSubmit={ handleSubmit}>
                                { errors ? 
                                    <Alert variant="danger">
                                        { notEqualWarning }
                                    </Alert>
                                    :
                                    ""
                                }
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={ handleChange} placeholder="Enter email" value={ email } />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={ handleChange } placeholder="Enter text" value={ username } />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={ password } onChange={ handleChange } placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" name="passwordConfirmation" value={ passwordConfirmation } onChange={ handleChange } placeholder="Password" />
                                </Form.Group>
                                    {!samePassword && notEqualWarning ? 
                                        <Alert variant="danger">
                                            { this.state.notEqualWarning }
                                        </Alert>
                                        :""
                                    }
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Form>;
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SignUp;