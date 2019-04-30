import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component{

    state={} 

    static getDerivedStateFromProps(nextProps){
        const { login,history }=nextProps;
        if(login!=="done") history.push("/login");
        return null;
    }

    render(){
        const { user }=this.props;
        return(
            <div className="text-center profile-card">
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