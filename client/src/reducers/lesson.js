function lesson(state={loading:null,data:null,registering:null},action){
    switch(action.type){
        case "START_GETTING_LESSON":
            return {...state,loading:true}
        case "FINISHED_GETTING_LESSON":
            // console.log("LESSON: "+action.payload)
            return {...state,loading:false,data:JSON.parse(action.payload)}
        case "FINISHED_COMPLETING_LESSON":
            return {...state,loading:false,data:action.payload}
        case "START_REGISTERING_LESSON":
            return {...state,registering:"pending"}
        case "FINISHED_REGISTERING_LESSON":
            return {...state,registering:"done"}
        default: 
            return state
    }
}

export default lesson;