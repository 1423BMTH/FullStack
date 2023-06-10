import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  //The first element is the current state value,
  // and the second element is the updater function associated with that state variable.
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () => setGood(good + 1);
  const neutralHandler = () => setNeutral(neutral + 1);
  const badHandler = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <p>
      <button onClick={goodHandler}>good</button>
      <button onClick = {neutralHandler}>neutral</button>
      <button onClick = {badHandler}>bad</button>
      <h1>statics</h1>
      </p>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App