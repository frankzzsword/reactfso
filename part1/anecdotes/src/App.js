import React, {useState} from 'react'

const Button = ({handleClick, text}) => {
  return (

  <button onClick={handleClick}>{text}</button>

)
}

const MostVotes = ({numOfVotes ,mostVoted, anecdotes}) => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
      {anecdotes[mostVoted]}
      <p>has {numOfVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
const [selected, setSelected] = useState(0)
const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
const [mostVoted, setMostVoted] = useState(0)

const changeAnecdote = () => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const setNewVote = () => {
  const copy = [...votes]
  copy[selected] = copy[selected]+1
  setVotes(copy)
  const maxVotes = Math.max(...copy)
  const indexOfMaxVotes = copy.indexOf(maxVotes)
  setMostVoted(indexOfMaxVotes)
}


return (
  <div>
    {anecdotes[selected]}
    <p>has {votes[selected]} votes</p>
    <Button handleClick={changeAnecdote} text='Next Anecdote' />
    <Button handleClick={setNewVote} text="vote" />
    <MostVotes mostVoted={mostVoted} anecdotes={anecdotes} numOfVotes={votes[mostVoted]} />
  </div>
) 
}


export default App

