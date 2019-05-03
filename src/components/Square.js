import React, { Component } from 'react'

export default class Square extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: null
      }
    }

    handleButtonClick = () => {
      
        this.setState({
            value: 'X'
        })
    }
    
    render() {
        return (
          <button className="square"
          onClick={this.handleButtonClick}
          >
            {this.state.value}
          </button>
        )
      }
}
