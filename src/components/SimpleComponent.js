// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
        mood: "happy"
    }
  }
  handleClick = () => {
    if (this.state.mood === "sad")
      this.setState({
        mood: "happy"
      })
    else
      this.setState({
        mood: "sad"
      })
  }
  render() {
    return(
      <div onClick={this.handleClick}>
       {this.state.mood}
      </div>
    )    
  }
}