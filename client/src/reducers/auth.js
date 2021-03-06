function auth(state={user:{id:null,username:null,email:null,admin:null,user_lesson:{}},registering:null,login:null,logout:null},action){
    switch(action.type){
        case "START_REGISTER":
            return { ...state,registering:"pending",login:null,logout:null}
        case "FINISHED_REGISTER":
            return { ...state,registering:"done",login:null,logout:null }
        case "START_LOGIN":
            return { ...state,login:"pending",logout:null,registering:null }
        case "FINISH_LOGIN":
            const userData=JSON.parse(action.userData);
            return { ...state,registering:null,user:{id:userData.id,username:userData.username,email:userData.email,admin:userData.admin,user_lessons:userData.user_lessons},login:"done"}
        case "LOG_OUT":
            return { ...state,user:{id:null,username:null,email:null,admin:null,user_lesson:[]},login:null,logout:"done",registering:null}
        // case "FINISHED_GETTING_LESSON":
        //     let payload=action.payload;
        //     console.log("PAYLOAD:"+payload);
        //     const user_lesson=payload.user_lesson
        //     return { ...state,user_lesson}
        default:
            return state;
    }
}



export default auth;