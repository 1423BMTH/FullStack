const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    /*However, do not pass different objects as separate props from
     the App component to the components Content and Total. 
     Instead, pass them directly as an array: */
    <div>
      <Header course={course} />
      <Content arrayObj ={parts} />
      <Total arrayObj={parts} />
    </div>    
  )
}

const Content = (props) => {
  //props is an obj
  const {arrayObj} = props;
  return (
    <div>
      <p>{arrayObj[0].name} {arrayObj[0].exercises}</p>
      <p>{arrayObj[1].name} {arrayObj[1].exercises}</p>
      <p>{arrayObj[2].name} {arrayObj[2].exercises}</p>
    </div>    
  )
} 

const Total = (props) => {
  //Accessing multiple objects at the same time
  // const {obj1, obj2, obj3} = props;
  //return(<p>{obj1.exercise + obj2.exercise + obj3.exercise}</p>);
  const {arrayObj} = props;
  return (
      <p>{arrayObj[0].exercises+ arrayObj[1].exercises + arrayObj[2].exercises}</p>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

export default App