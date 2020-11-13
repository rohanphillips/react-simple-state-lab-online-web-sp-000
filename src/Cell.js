import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super()
    this.state = {
      color: props.value
    }
  }

  updateState = () => {
    // console.log("UPDATESTATE", this.state.color);
    // this.style.backgroundColor = "#333"
    this.setState({
      color: "#333"
    })
  }

  render() {
    // console.log("CELLVALUE", this.props.value)
    return (
      <div onClick={this.updateState} className="cell" style={{backgroundColor: `${this.state.color}`}}>
        
      </div>
    )
  }
  
}