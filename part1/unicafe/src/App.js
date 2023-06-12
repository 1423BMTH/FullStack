import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text}{value}</p>
    </div>
  )
}

const Statistics = ({good, neutral,bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    );
  }
  else{
    return (
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value ={good + neutral + bad } />
        <StatisticLine text="average" value = {(good * 1 + neutral *0 + bad * (-1))/(good + bad + neutral)} />
        <div><StatisticLine text="positive" value ={good/(good + bad + neutral)*100} /> <p>%</p></div>
      </div>
    )
  };
};

const Button = (props) => {
  const {text, handleClick} = props;
  return (
    //handleClick is a function
    <button onClick = {handleClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => {
    setGood(good + 1);
  }
  const neutralHandler = () => {
    setNeutral(neutral + 1);
  }
  const badHandler = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <p>
        <Button handleClick = {goodHandler} text = "good"/>
        <Button handleClick = {neutralHandler} text = "bad"/>
        <Button handleClick = {badHandler} text = "neutral"/>
        <h1>Statistics</h1>
      </p>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  );
}
export default App;