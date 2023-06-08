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
    <div>
      <Header course = {course} />
      <p>
        <Content name = {parts[0].name} exercises = {parts[0].exercises} />
      </p>
      <p>
        <Content name = {parts[1].name} exercises = {parts[1].exercises} />
      </p>
      <p>
        <Content name = {parts[2].name} exercises ={parts[2].exercises} />
      </p>
      <p>
      <p style = {{display : "flex", alignItems: "center"}}>
        Number of exercises&nbsp;
        <Total obj1 = {parts[0]} obj2 = {parts[1]} obj3 = {parts[2]} />
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
  //Accessing multiple objects at the same time
  const {obj1, obj2, obj3} = props;
  return (
      <p>{props.obj1.exercises+ props.obj2.exercises + props.obj3.exercises}</p>
  )
}

export default App