function lessons(state={loading:null,data:[]},action){
    switch(action.type){
        case "START_GETTING_LESSONS":
         return {...state, loading:true}
        case "FINISHED_GETTING_LESSONS":
         return {...state,loading:false,data:action.payload}
        default:
            return state
    }
}

export default lessons;