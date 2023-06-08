const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1><Header course = {course} /></h1>
      <p>
        <Content part = {part1} exercises = {exercises1}/>
      </p>
      <p>
        <Content part = {part2} exercises = {exercises2}/>
      </p>
      <p>
        <Content part = {part3} exercises = {exercises3}/>
      </p>
      <p style = {{display : "flex", alignItems: "center"}}>Number of exercises&nbsp;<Total exe1 = {exercises1} exe2 = {exercises2} exe3 = {exercises3} /></p>
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

const Content = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>
  )
} 

const Total = (props) => {
  return (
    
      <p>{props.exe1 + props.exe2 + props.exe3}</p>
    

  )
}

export default App