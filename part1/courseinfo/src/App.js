const Hello = (props) => {

  //Component helper function
  const bornYr = () => new Date().getFullYear() - props.age;
  console.log("This is", bornYr());
  return (
    <div>
      {bornYr()}
    </div>
  );
}

const App = () => {
  const name = 'Peter'
  const age = 10
  console.log("Fuck that bitch")

  return (
    <div>
      <h1>Greetings</h1>
      <Hello age={26 + 10} />
    </div>
  )
}

export default App;