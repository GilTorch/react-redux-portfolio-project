import React from 'react';
import Lesson from '../components/Lesson';


class LessonPage extends React.Component{

    render(){
        return(
        <div>
            <Lesson {...this.props} />
        </div>)
    }
}

export default LessonPage;