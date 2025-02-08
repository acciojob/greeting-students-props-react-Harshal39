// write code for Welcome component here
import React from 'react'

const Welcome = (props) => {
  return (
    <>
    <h1>Hey {props.name}!</h1>
    <h2>Welcome to School</h2>
    <p>We are excited to have you here. Let's make this a great learning journey!</p>
    </>
  )
}

export default Welcome