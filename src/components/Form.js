import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
        super();
        this.state = {
            userName : '',
            comments : ''
        }
    }
    handleUsername  = (event) => {
        this.setState({
            userName : event.target.value,
          
        })
    }

        handleComments  = (event) => {
            this.setState({
                comments : event.target.value,
              
            })
        }
    render() {
        return (
            <form>
                <label >UserName</label>
                <input type="text" value={this.state.userName} onChange={this.handleUsername} />
                <label >Comments</label>
                <input type="text" value={this.state.comments} onChange={this.handleComments} />
            </form>
        )
    }
}

export default Form
