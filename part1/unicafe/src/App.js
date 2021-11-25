import React, {useState} from 'react'

const Button = ({handleClick, text}) => <div><button onClick={handleClick}>{text}</button></div>
 
const Statistics = ({good, bad, neutral, allFeedback}) => {
const average = good + (-1 * bad) / allFeedback
const positive = (good/allFeedback)*100

  if (allFeedback === 0) {
    return (
      <div>
          <h2>statistics</h2>
        <p>no feedback given</p>
      </div>
    )
  }
  else {
  return (
  <div>
  <h2>Statistics</h2>
  <table>
  <tbody>
  <tr><StatisticLine text="good" value={good} /></tr>
  <tr><StatisticLine text="bad" value={bad} /></tr>
  <tr><StatisticLine text="neutral" value={neutral} /></tr>
  <tr><StatisticLine text="average" value={average} /></tr>
  <tr><StatisticLine text="positive" value={positive} /></tr>
  </tbody>
  </table>
  </div>
  )
}
}

const StatisticLine = ({text, value}) => {
return (
  <>
  <td>{text}</td>
  <td>{value}</td>
  </>
)
}

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)

  const setGoodValue = () =>  {
    setGood(good+1)
    setAllFeedback(allFeedback+1)
  }
  const setBadValue = () => { 
    setBad(bad+1)
    setAllFeedback(allFeedback+1)
  }
  const setNeutralValue = () => { 
    setNeutral(neutral+1)
    setAllFeedback(allFeedback+1)
  }

  return (
    <div>
      <Button handleClick={setGoodValue} text="good"/>      
      <Button handleClick={setBadValue} text="bad"/>      
      <Button handleClick={setNeutralValue} text="neutral"/>      
      <Statistics good={good} bad={bad} neutral={neutral} allFeedback={allFeedback} />
    </div>
  )
}

export default App