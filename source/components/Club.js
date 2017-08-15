import React, { Component } from 'react'

class Club extends Component {
  render(){
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>{this.props.standing}</h4>
      </div>
    )
  }
}

export default Club
