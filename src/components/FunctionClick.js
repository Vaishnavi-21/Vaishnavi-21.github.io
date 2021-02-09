import React, { Component } from 'react'

export class FunctionClick extends Component {

    clickHandler=()=>{
        console.log("Fuji");
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default FunctionClick
