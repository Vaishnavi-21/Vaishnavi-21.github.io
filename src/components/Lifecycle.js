import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props){
        super(props)
        this.state={
            name : 'Vaishnavi'
        }
        console.log('Lifecycle Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Derived')
        return null
    }
    componentDidMount(){
        console.log('Component Mount')
    }
    render() {
        console.log("Render")
        return (
            <div>
               Lifecycle render 
            </div>
        )
    }
}

export default Lifecycle
