import React,{ Component } from 'react';
import { Form, Button, Container, Row, Col,Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state={
            username:"",
            email:"",
            password:"",
            passwordConfirmation:"",
            samePassword:false,
            notEqualWarning: null
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        },()=>{
            const passwordsAreEqual=this.state.password === this.state.passwordConfirmation ;
            this.setState({
                samePassword: passwordsAreEqual,
                notEqualWarning: passwordsAreEqual ? null : "Make sure that both passwords are equal."
            })
        })
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state)
    }
    
    render(){
        return(
            <div>
                <Container className="mt-3 mt-4">
                    <Row>
                        <Col md={{span:6, offset: 3}}>   
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" value={this.state.email} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={this.handleChange} placeholder="Enter text" value={this.state.username} />
                                    <Form.Text className="text-muted">
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password" />
                                </Form.Group>
                                
                                    {!this.state.samePassword && this.state.notEqualWarning ? 
                                        <Alert variant="danger">
                                            {this.state.notEqualWarning}
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