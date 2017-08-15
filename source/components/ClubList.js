import React from 'react'
import ClubView from './ClubView'

const ClubList = ({ clubs, onSelect }) => (
  <div className="ClubList">
    {Object.keys(clubs).map((key) => {
      // console.log(clubs[key])
      let club = clubs[key]
      return(
        <ClubView
          key={key}
          onSelect={onSelect}
          {...club} />
      )
    })}
  </div>
)

export default ClubList
