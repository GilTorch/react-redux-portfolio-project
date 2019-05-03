import React from 'react';
import AddLesson from '../components/AddLesson';
import AddUser from '../components/AddUser';
import DisplayLessons from '../components/DisplayLessons';
import DisplayUsers from '../components/DisplayUsers';
import { getLessons } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';

class Dashboard extends React.Component{

    componentDidMount(){
        this.props.dispatch(getLessons())
    }
    render(){
        const { auth,lessons,users,history }=this.props;
        return(
            <Container className="mt-3 mt-4">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                    { (auth.login=="done" && auth.user.admin) ? null : <Redirect to="/login"/>}
                    <h1>Dashboard</h1>
                    <div>
                        <h2>All Lessons:</h2>
                        <DisplayLessons lessons={lessons.data} />
                        <AddLesson history={ history }/>
                    </div> 
                    <div>
                        <h2>All Users</h2>
                        {/* <DisplayUsers/>
                        <AddUser/> */}
                    </div>
                </Col>
            </Row>
            </Container>
        )
    }
}

const mapStateToProps=({ auth,lessons })=>{
    return {
        auth,
        lessons
    }
}

export default connect(mapStateToProps)(Dashboard);