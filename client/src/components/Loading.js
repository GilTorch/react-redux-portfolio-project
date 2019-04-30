import React from 'react';

const style={
    width:"100%",
    height:"100vh",
    display:"flex",
    position:"fixed",
    backgroundColor:"rgba(255,255,255,0.4)",
    justifyContent:"center",
    alignItems:"center",
    color:"black",
    fontWeight:"bold"
}

const Loading=()=>{
    return (
        <div style={style}>
            Loading...
        </div>
    )
}

export default Loading;