import { useState } from 'react'
//Reference the hook outside of function
// const Statistics = (props) => {
//   const {good, neutral ,bad} = props;
//   return (
//     <div>
//       <p>good {props.good}</p>
//       <p>neutral {props.neutral}</p>
//       <p>bad {props.bad}</p>
//       <p>all {props.good + props.neutral + props.bad}</p>
//       <p>average {(props.good * 1 + props.neutral *0 + props.bad * (-1))/(props.good + props.bad + props.neutral)}</p>
//       <p>positive {props.good/(props.good + props.bad + props.neutral)*100} %</p>
//     </div>
//   )
// }
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
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {(good * 1 + neutral *0 + bad * (-1))/(good + bad + neutral)}</p>
        <p>positive {good/(good + bad + neutral)*100} %</p>
      </div>
    );
  };
};

const App = () => {
  // save clicks of each button to its own state
  //The first element is the current state value,
  // and the second element is the updater function associated with that state variable.
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
      <button onClick={goodHandler}>good</button>
      <button onClick = {neutralHandler}>neutral</button>
      <button onClick = {badHandler}>bad</button>
      <h1>statics</h1>
      </p>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  );
}

export default App;