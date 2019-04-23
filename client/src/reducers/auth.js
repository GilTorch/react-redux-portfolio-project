function auth(state={registering:null,login:null},action){
    switch(action.type){
        case "START_REGISTER":
            return { ...state,registering:"pending"}
        case "FINISHED_REGISTER":
            return { ...state,registering:"done" }
        case "START_LOGIN":
            return { ...state,login:"pending" }
        case "FINISHED_LOGIN":
            return { ...state,login:"done"}
        default:
            return state;
    }
}



export default auth;