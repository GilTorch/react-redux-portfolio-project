function auth(state={user:{id:null,username:null,email:null,admin:null,user_lessons:[]},registering:null,login:null,logout:null},action){
    switch(action.type){
        case "START_REGISTER":
            return { ...state,registering:"pending",login:null,logout:null}
        case "FINISHED_REGISTER":
            return { ...state,registering:"done",login:null,logout:null }
        case "START_LOGIN":
            return { ...state,login:"pending",logout:null }
        case "FINISH_LOGIN":
            const userData=JSON.parse(action.userData);
            console.log("USER DATA:"+userData);
            console.log("USER ID:"+userData.id)
            return { ...state,registering:null,user:{id:userData.id,username:userData.username,email:userData.email,admin:userData.admin,user_lessons:userData.user_lessons},login:"done"}
        case "LOG_OUT":
            return { ...state,user:{id:null,username:null,email:null,admin:null,user_lessons:[]},login:null,logout:"done"}

            // return {logout:"done",login:null,registering:null,...state,user:{id:null,username:null,email:null,admin:false,user_lessons:[]}}
        default:
            return state;
    }
}



export default auth;