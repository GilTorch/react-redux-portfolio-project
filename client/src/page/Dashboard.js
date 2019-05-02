import React from 'react';
import AddLesson from '../components/AddLesson';
import AddUser from '../components/AddUser';
import DisplayLessons from '../components/DisplayLessons';
import DisplayUsers from '../components/DisplayUsers';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard=({ auth,history })=>{
    return(
        <div>
            { (auth.login=="done" && auth.user.admin) ? null : <Redirect to="/login"/>}
           <h1>Dashboard</h1>
           <div>
                <h2>All Lessons:</h2>
                <DisplayLessons/>
                <AddLesson history={ history }/>
            </div> 
            <div>
                <h2>All Users</h2>
                <DisplayUsers/>
                <AddUser/>
            </div>
            
        </div>
    )
}

const mapStateToProps=({ auth,lessons })=>{
    return {
        auth,
        lessons
    }
}

export default connect(mapStateToProps)(Dashboard);