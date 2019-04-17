import React,{ Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Authentication extends Component{

    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
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
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicChecbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Form.Text>
                                    Don't have an account? <Link to="/signup"><Button variant="warning">Sign Up</Button></Link>
                                </Form.Text>
                                <Button variant="primary" type="submit">
                                    Log In 
                                </Button>
                            </Form>;
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Authentication;