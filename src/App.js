
import {useState} from 'react'


const Button = (props) => {
  return (
    <>
      <button onClick = {props.handleClick}>
        {props.text}
      </button>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <>
      <p>
        {props.text} {props.number}
      </p>
    </>
  )
}


const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.bad * (-1)) / sum 
  const positive = (props.good / sum) * 100 + ' %' 
  if (sum >= 1) {
    return (
      <>
        <h1>Statistics</h1>
        <StatisticLine text = 'good' number = {props.good}/>
        <StatisticLine text = 'neutral' number = {props.neutral}/>
        <StatisticLine text = 'bad' number = {props.bad}/>
        <StatisticLine text = 'Sum' number = {sum}/>
        <StatisticLine text = 'Average' number = {average}/>
        <StatisticLine text = 'Positive' number = {positive}/>
      </>
    )
  } else {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given!</p>
      </>
    )
  }
  
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>Give feedback</h1>
      <Button text = 'good' handleClick = {handleGood}/>
      <Button text = 'neutral' handleClick = {handleNeutral}/>
      <Button text = 'bad' handleClick = {handleBad}/>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </>
  );
}

export default App;
