

export function loginUser(userData){
    return {
        type:"LOGIN_USER",
        userData
    }
}

export function updateUser(userData){
    return {
        type:"UPDATE_USER",
        userData
    }
}

export function fetchUser(userId){
    return {
        type:"FETCH_USER",
        userId
    }
}

export function deleteUser(userId){
    return {
        type:"DELETE_USER",
        userId
    }
}

export function registerUser(userData) {
    return (dispatch) => {
      dispatch({ type: 'START_REGISTER' });
      return fetch('http://localhost:3001/users',{
          method:"POST",
          headers:{
              'Accept':'application/json',
              'Content-Type':'application/json'
          },
          body: JSON.stringify(userData)
      }).then(async (response)=>{
            if(response.ok){
                return response.text()
            }
            const jsonResponse = await response.json();
            return jsonResponse;
            })
        .then(response => {
            const errors=JSON.parse(response).errors
            if(errors){
                const errorMessages=Object.keys(errors).map((key)=> key+" "+errors[key][0]);
                dispatch(alertFailure(errorMessages))
            }else{
                dispatch(alertSuccess(["Successfully Registered"]))
                dispatch(finishedRegisterUser())
            }
        });
    };
  }

export function alertFailure(errorMessage){
    return {
        type:"ALERT_FAILURE",
        errorMessage
    }
  }

export function alertSuccess(successMessage){
    return {
        type:"ALERT_SUCCESS",
        successMessage
    }
}


export function finishedRegisterUser(){
    return {
        type:"FINISHED_REGISTER"
    }
}

export function fetchLessons(){
    return {
        type:"FETCH_LESSONS"
    }
}

export function fetchLesson(lessonId){
    return {
        type:"FETCH_LESSON",
        lessonId
    }
}

export function updateLesson(lessonId){
    return {
        type:"UPDATE_LESSON",
        lessonId
    }
} 

export function deleteLesson(lessonId){
    return {
        type:"DELETE_LESSON",
        lessonId
    }
}