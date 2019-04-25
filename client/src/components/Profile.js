import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Profile extends Component{
    render(){
        const { user,logout,login,history }=this.props;
        if(logout==="done") history.push("/login")
        const redirecting= login !=="done" ? <Redirect to="/login"/> : null;
        return(
            <div className="text-center profile-card">
                {redirecting}
                <h1>{user.username}</h1>
                <p>{user.email}</p>
                <p>{user.admin ? "ADMIN":""}</p>
            </div>
        )
    }
}

const mapStateToProps=( state )=>{
  return { 
      login: state.auth.login,
      logout:state.auth.logout,
      user:state.auth.user 
  } 
}

export default connect( mapStateToProps )(Profile);