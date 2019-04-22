function auth(state={username:null,email:null,admin:null,loading:null,errors:null,user_lessons:[]},action){
    switch(action.type){
        case "START_REGISTER":
            return { ...state,loading:true}
        case "FINISHED_REGISTER":
            const userData=JSON.parse(action.userData);
            return { ...state,errors:false,...userData,loading:false }
        case "USER_REGISTER_ERROR":
            const errors=action.errors;
            return {...state,loading:false,errors}
        default:
            return state;
    }
}



export default auth;