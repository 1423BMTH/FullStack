const Hello = (props) => {
  //Destructuring: extracting values from objects or 
  //arrays and assigning them to variables in a concise and convenient manner.
  const name = props.name;
  const age = props.age;
  //End of destructuring
  
  const bornYr = () => new Date().getFullYear() - age;
  console.log("This is", bornYr());
  return (
    <div>
      <p>THEIR name is {name} and age is {age}</p>
      <p>THEY were born in {bornYr()}</p>
    </div>
  );
}

const App = () => {
  const name = 'SUN YING'
  const age = 27
  console.log("Fuck that bitch")
  return (
    <div>
      <h1>THE FOLLOWING IS AN INBECILE!</h1>
      <Hello name = {name} age={age} />
    </div>
  )
}

export default App;