let initialState={
}

export const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "next-section": {
            let obj=action.data;
            console.log("loop in reducer");
            return {...obj};
        }
        case "back-section": {
            console.log(initialState);
            return state;
        }
        case "over":{
            return state;
        }
         default: return state;
    }
}