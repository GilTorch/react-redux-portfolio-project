import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
    render(){
        const { user,logout,history }=this.props;
        if(logout==="done") history.push("/login")
        return(
            <div className="text-center">
                <h1>{user.username}</h1>
                <p>{user.email}</p>
                <p>{user.admin ? "ADMIN":""}</p>
            </div>
        )
    }
}

const mapStateToProps=( state )=>{
  return { 
      logout:state.auth.logout,
      user:state.auth.user 
  } 
}

export default connect( mapStateToProps )(Profile);