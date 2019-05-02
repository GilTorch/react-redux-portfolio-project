import React, { Component, Fragment } from 'react';
import { getLesson,completeLesson } from '../actions/actionCreators';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'react-bootstrap';
import Loading from './Loading';

const style={
    content:{
        width:"40%",
        margin:"auto",
        marginTop:"50px",
        textAlign:"justify"
    },
    button:{
        minHeight:"50px"
    },
    icon:{
        failure:{color:"red"},
        success:{color:"green"}
    }
}

class Lesson extends Component {

    state = {}

    componentDidMount() {
        const { dispatch, match,lesson,history,auth } = this.props;
        dispatch(getLesson(match.params.id));
        const login=auth.login;
        if (login !== "done") history.push("/login");
        if (lesson === null || (lesson && lesson.data === null)) history.push("/lessons");
    }

    static getDerivedStateFromProps(nextProps) {
        const { auth, lesson, history } = nextProps;
        const login=auth.login;
        if (login !== "done") history.push("/login");
        if (lesson === null || (lesson && lesson.data === null)) history.push("/lessons");
        return null
    }

    markLessonAsComplete=()=>{
        const { lesson,auth }=this.props;
        this.props.dispatch(completeLesson(lesson.data.lesson.id,auth.user.id))
    }

    render() {
        let { lesson } = this.props;
        let loading = lesson.loading;
        let data = lesson.data;
        let completedIcon=(data && !data.user_lesson.completed) ? <FontAwesomeIcon style={style.icon.failure} icon="circle"/> : <FontAwesomeIcon style={style.icon.success} icon="check-circle"/>
        let completed= data ? data.user_lesson.completed : false;
        // debugger;
        return (
            <div>
                {loading === false ?
                    <div className="lesson-container">
                        <h1 className="jumbotron text-center">{data.lesson.title} {completedIcon}</h1>
                        <p  style={style.content}>{data.lesson.content}</p>
                        <Button style={style.button} disabled={completed} onClick={this.markLessonAsComplete} className="col-md-4 offset-md-4 mt-3" variant={"success"}>Mark as Read <FontAwesomeIcon icon="check-circle"/></Button>
                    </div>
                    :
                    <Loading/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        lesson: state.lesson
    }
}

export default connect(mapStateToProps)(Lesson);
