import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component{
    render(){
        const { user }=this.props;
        return(
            <div className="text-center">
                <h1>{user.username}</h1>
                <p>{user.email}</p>
                <p>{user.admin ? "ADMIN":""}</p>
            </div>
        )
    }
}

const mapStateToProps=( state)=>{
  return { user:state.auth.user } 
}

export default connect( mapStateToProps )(Profile);