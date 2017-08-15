import React from 'react'

export default class ClubView extends React.Component {
  handleClick = () => {
    this.props.onSelect(this.props.standing)
  }
  render(){
    // console.log(this.props)
    return(
      <div className="ClubView" onClick={this.handleClick}>
        <div>Club: {this.props.name}</div>
        <div>Standing: {this.props.standing}</div>
      </div>
    )
  }
}
