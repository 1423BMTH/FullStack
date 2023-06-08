const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    /*Change the course and its parts into a single JavaScript object. 
    Fix everything that breaks. */
    <div>
      
      <Content arrayObj ={course} />
      
    </div>    
  )
}

const Content = (props) => {
  //props is an obj
  const {arrayObj} = props;
  return (
    <div>
      <h1>{arrayObj.name}</h1>
      <p>{arrayObj.parts[0].name} {arrayObj.parts[0].exercises}</p>
      <p>{arrayObj.parts[1].name} {arrayObj.parts[1].exercises}</p>
      <p>{arrayObj.parts[2].name} {arrayObj.parts[2].exercises}</p>
      <p>Total is {arrayObj.parts[0].exercises + arrayObj.parts[1].exercises + arrayObj.parts[2].exercises}</p>
    </div>    
  )
} 

// const Total = (props) => {
//   //Accessing multiple objects at the same time
//   // const {obj1, obj2, obj3} = props;
//   //return(<p>{obj1.exercise + obj2.exercise + obj3.exercise}</p>);
//   const {arrayObj} = props;
//   return (
//       <p>{arrayObj[0].exercises+ arrayObj[1].exercises + arrayObj[2].exercises}</p>
//   )
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

export default App