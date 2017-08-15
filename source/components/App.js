import React, { Component } from 'react'

import axios from 'axios'

import Header from './Header'
import ClubList from './ClubList'
import Club from './Club'

// access to browser history
const pushState = (obj, url) => {
  window.history.pushState(obj, '', url)
}

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pageHeader: 'EPL Teams',
      clubs: this.props.initialData
    };
    this.fetchClub = this.fetchClub.bind(this)
    // this = this now
  }

  fetchClub = (clubKey) => {
    pushState(
      { currentClubKey: clubKey},
      `/club/${clubKey}`
    )
    this.setState({
      currentClubKey: clubKey
    })
  }

  checkContent(){
    if(this.state.currentClubKey){
      return <Club {...this.state.clubs[this.state.currentClubKey]}/>
    }

    return <ClubList onSelect={this.fetchClub} clubs={this.state.clubs}/>
  }

  render(){
    return(
      <div className="App" onClick={this.handleClick}>
      {this.state.pageHeader}

      {this.checkContent()}
      </div>
    )
  }
}
