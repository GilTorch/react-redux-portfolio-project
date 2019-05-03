import React from 'react';
import Lesson from '../components/Lesson';


const LessonPage=(props)=>{

        return(
            <div>
                <Lesson { ...props } />
            </div>
        )
}

export default LessonPage;