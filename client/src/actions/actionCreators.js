

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

// export function loading(){
//     return {
//         type:"LOADING"
//     }
// }

// fetch("http://localhost:3001/users", {
//     method: 'POST',
//     headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(values)
// }).then(async (response)=>{
//     setSubmitting(false)
//     if(response.ok){
//         return response.text()
//     }
//     const jsonResponse = await response.json();
//     return jsonResponse;
// })
// .then(function(text) {                          // second then()
//     console.log('Request successful', text);  
//   })  
// }

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
                dispatch(userRegisterError(errors))
            }else{
                dispatch(finishedRegisterUser(response))
            }
        });
    };
  }

export function userRegisterError(errors){
    return {
        type:"USER_REGISTER_ERROR",
        errors
    }
}

export function finishedRegisterUser(userData){
    return {
        type:"FINISHED_REGISTER",
        userData
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