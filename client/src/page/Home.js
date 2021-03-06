import React, { Component } from 'react';
import { Jumbotron, Button, Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from  "@fortawesome/react-fontawesome";

const Home=()=>{
        return(
            <div className="home">
                <Jumbotron>
                    <h4 className="display-4 text-center">Learn To Code For Free<span style={{"fontSize":"100px"}}>.</span></h4>
                    <Row>
                        <Col md={4}>
                            <h3 className="text-center"><FontAwesomeIcon icon="fire" className="fa-2x" /></h3>
                            <p className="text-center">Join a supportive community of millions of coders</p>
                        </Col>
                        <Col md={4}>
                            <h3 className="text-center"><FontAwesomeIcon icon="certificate" className="fa-2x"/></h3>
                            <p className="text-center">Build projects and earn free certifications.</p>
                        </Col>
                        <Col md={4}>
                            <h2 className="text-center"><FontAwesomeIcon icon="briefcase" className="fa-2x"/></h2>
                            <p className="text-center">Get experience by coding for nonprofits.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Link className="col-md-4 offset-md-4" to="/lessons">
                            <Button style={{width:"100%",minHeight:"50px"}}variant="warning">Get Started</Button>
                        </Link>                 
                    </Row>
                </Jumbotron>
            </div>
        )
}

export default Home;