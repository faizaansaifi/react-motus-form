export const nextSection=(data)=>{
    console.log("loop in action",data);
    return {
        type: "next-section",
        data
    }
}

export const actionOver=()=>{
    return {
        type:"over"
    }
}

