import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react'
import Welcome from './Welcome';

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
             count : 0 
         }
     }
     increment () {
         this.setState((prevState,props) => ({
            count : prevState.count+3
         }), () => {
             console.log(this.state.count)
         })
     }
     
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick = {() => this.increment()}>Increment</button>
            count - {count}
            <Welcome name={count} />
            </div>
        )
    }
}

export default Counter;
