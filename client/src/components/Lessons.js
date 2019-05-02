import React,{ Component } from 'react';
import { getLessons } from '../actions/actionCreators';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const style={
    minHeight:"500px",
    marginTop:"100px",
    width:"40%",
    margin:"auto",
    marginTop:"50px",
    border:"1px solid #eee"
}


class Lessons extends Component{
    state={}
    static getDerivedStateFromProps(nextProps){
        const { login,history }=nextProps;
        if(login!=="done") history.push("/login");
        return null;
    }

    componentDidMount(){
        this.props.dispatch(getLessons());
    }

    renderLessons=(lessons)=>{
        if(lessons){
            return lessons.map((lesson)=> <li key={lesson.id}><Link to={`/lessons/${lesson.id}`}>{lesson.title}</Link></li>)
        }
    }

    render(){
        const { lessons }=this.props;

        return(
            <div style={style}>
                <h1 className="text-center">Avalaible Lessons</h1>
                <ul>
                    {this.renderLessons(lessons.data)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps=( state )=>{
    return { 
        login: state.auth.login,
        logout:state.auth.logout,
        user:state.auth.user,
        lessons: state.lessons 
    } 
  }
  
export default connect(mapStateToProps)(Lessons);