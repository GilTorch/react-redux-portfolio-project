function alert(state={ error: null,success:null},action){
    switch(action.type){
        case "ALERT_FAILURE":
            return { success:null,error: action.errorMessage }
        case "ALERT_SUCCESS":
            return { error:null,success: action.successMessage}
        default: 
            return state;
    }
}

export default alert;