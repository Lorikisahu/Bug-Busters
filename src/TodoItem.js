import React from "react"

function TodoItem(){
    
    const stylesin1={
        color:"#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize:20
    }
    const stylesin2={
        color:"#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize:30
    }
    const stylesin3={
        color:"#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize:40
    }
    const stylesin4={
        color:"#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize:50
    }
    return(
      
        <div>
            <input type="checkbox"/>
            <p style={stylesin1}>Qebapa</p>
            <input type="checkbox"/>
            <p style={stylesin2}>Qofte</p>
            <input type="checkbox"/>
            <p style={stylesin3}>Pleskavica</p>
            <input type="checkbox"/>
            <p style={stylesin4}>Virshlle</p>
        </div>

    )
}
export default TodoItem