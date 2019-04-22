function auth(state={registering:null},action){
    switch(action.type){
        case "START_REGISTER":
            return { registering:"pending"}
        case "FINISHED_REGISTER":
            return { registering:"done" }
        default:
            return state;
    }
}



export default auth;