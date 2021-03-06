

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


export function loginUser(userData) {
    return (dispatch) => {
      dispatch({ type: 'START_LOGIN' });
      return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/login`,{
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
            console.log(JSON.stringify(response))
            const errors=JSON.parse(response).errors
            if(errors){
                console.log("ERRORS:"+errors);
                const errorMessages=Object.keys(errors).map((key)=> key+" "+errors[key][0]);
                dispatch(alertFailure(errorMessages))
            }else{
                // console.log("SUCCESS:"+response);
                localStorage.setItem('users', response);
                dispatch(alertSuccess(["Successfully Logged In"]))
                // dispatch(finishedLogin())
            }
        });
    };
  }

export function getLessons(){
    return (dispatch)=>{
        dispatch({ type: "START_GETTING_LESSONS" })
        return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/lessons`)
            .then(async (response)=> await response.json())
            .then((jsonResponse)=>{
                dispatch({type:"FINISHED_GETTING_LESSONS",payload:jsonResponse})
            })
    }
}

export function completeLesson(lessonId,userId){
    return (dispatch)=>{
        dispatch({type:"START_COMPLETING_LESSON"})
        return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/lessons/${lessonId}/complete?current_user_id=${userId}`)
                .then(async (response)=> await response.json())
                .then((jsonResponse)=>{
                    console.log("YEAHH!:"+jsonResponse);
                    dispatch({type:"FINISHED_COMPLETING_LESSON",payload:jsonResponse})
                })
    }
}

export function getLesson(lessonId){
    return (dispatch)=>{
        const userData=JSON.parse(localStorage.getItem('users'));
        dispatch({ type: "START_GETTING_LESSON" })
        return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/lessons/${lessonId}?current_user_id=${userData['id']}`)
            .then(async (response)=>{
                if(response.ok){
                    return response.text()
                }
                const jsonResponse = await response.json();
                return jsonResponse;
            })
            .then((jsonResponse)=>{
                const errors=JSON.parse(jsonResponse).errors
                if(errors){
                    console.log("ERRORS:"+errors);
                    const errorMessages=Object.keys(errors).map((key)=> key+" "+errors[key][0]);
                    dispatch(alertFailure(errorMessages))
                }else{
                    dispatch({type:"FINISHED_GETTING_LESSON",payload:jsonResponse})

                }
            })
    }
}

export function logout(){ // componentDidMount(){

    // }
    localStorage.removeItem('users');
    return (dispatch) => {
        dispatch(alertFailure(["Logged Out"]))
        dispatch({type:"LOG_OUT"})
    }
}

export function updateLoginState(userData){
    return {
        type:"FINISH_LOGIN",
        userData
    }
}

export function registerUser(userData) {
    return (dispatch) => {
      dispatch({ type: 'START_REGISTER' });
      return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/users`,{
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

export function registerLesson(values){
    return (dispatch)=>{
        dispatch({type:"START_REGISTERING_LESSON"})
        return fetch(`${process.env.REACT_APP_DEV_API_URL}:${process.env.REACT_APP_DEV_API_PORT}/lessons`,{
            method:"POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(async (response)=>{
            if(response.ok){
                return response.text()
            }
            const jsonResponse = await response.json();
            return jsonResponse;
            })
        .then((response)=>{
            const errors=response.errors
            if(errors){
                const errorMessages=Object.keys(errors).map((key)=> key+" "+errors[key][0]);
                dispatch(alertFailure(errorMessages))
            }else{
                dispatch(alertSuccess(["Successfully Registered"]))
                dispatch(finishedRegisteringLesson(response))
            }
        })
    }
}

export function finishedRegisteringLesson(lessonData){
    return {
        type:"FINISHED_REGISTERING_LESSON",
        lessonData
    }
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