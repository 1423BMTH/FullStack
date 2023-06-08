//This is NOT a shorthand expression, need to add return
const App = (/*This is empty because no para is inside */) => {
  const a = 1
  const b = 2
  const now = new Date()
  return(
    <div>
    <p>Hello </p>
    <p>{a} + {b} = {a+b}</p>
    <p>{now.toString()}</p>
    <Hello />
    <App0 />
    <Hello />
    <Hello />
    <HelloName name = "James"/*It's not attr = "James"*/ /> 
    <HelloName name = "Bob"/>
    <HelloName name = "Emma"/>
  </div>
  )
  }

//This is a shorthand expression, using () instead of {} after the arrow  
const App0 = () => (<div><p>Hello Loser </p></div>)

const Hello = () =>{
  return(
    <div>
      <p>Hello You Missed It!</p>
    </div>
  )
}

const HelloName = (attr) => {
  return(
    <div>
      <p>Hello {attr.name}</p>
    </div>
  )
}

const Test = () => {
  return(
    <div>
    <TestName name = "James"/>
    <TestName name = "Emma" />
    </div>
  )
}

const TestName = (obj) =>{
  return (
    <div>
    <p>Hello, are you {obj.name}?</p>
    <p>Good Luck!</p>
    </div>
  )
}

const Hello1 = (props) => {
  return (
    <div>
      <p>Hello, I fucking hate that {props.name} and they are {props.agelimit1} to {props.agelimit2}  years old</p>
    </div>
  )
}

const App1 = () => {
  const name = "that bitch sits at my back";
  const agelimit1 = 20;
  const agelimit2 = 30;
  return (
    <div>
      <Hello1 name = {name} agelimit1 = {agelimit1} agelimit2 = {agelimit2} />
      <Hello1 name = "That Bitch Sitiing AT MY BACK" agelimit1 = {20} agelimit2 = {10*3} />
    </div>
  );
}
export default App1;

