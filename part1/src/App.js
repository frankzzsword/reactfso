import React from 'react'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, You are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name="Andrew"
  const age="34"
  return(
  <div>
    <h1>Greetings</h1>
    <Hello name="Varun" age='32' />
    <Hello name={name} age={age} />

  </div>
  )
}

export default App