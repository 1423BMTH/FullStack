const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <p>
        <Content name = {part1.name} exercises = {part1.exercises} />
      </p>
      <p>
        <Content name = {part2.name} exercises = {part2.exercises} />
      </p>
      <p>
        <Content name = {part3.name} exercises ={part3.exercises} />
      </p>
      <p>
      <p style = {{display : "flex", alignItems: "center"}}>
        Number of exercises&nbsp;
        <Total obj1 = {part1} obj2 = {part2} obj3 = {part3} />
      </p>
      </p>
    </div>
  )
}

const Content = (props) => {
  //props is an obj
  return (
    <div>
      {props.name} {props.exercises}
    </div>
  )
} 

const Header = (props) => {
  return (
    <div>
      <h1>props.course</h1>
    </div>
  )
}

const Total = (props) => {
  const {obj1, obj2, obj3} = props;
  return (
      <p>{props.obj1.exercises+ props.obj2.exercises + props.obj3.exercises}</p>
  )
}

export default App