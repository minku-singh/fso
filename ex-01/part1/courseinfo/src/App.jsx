import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

function App() {
  const course = "Half Stack application development"
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "State of a component",
      exercises: 14
    },
    {
      name: "Using props to pass data",
      exercises: 7
    }
  ]

  return(
    <div>
      <Header course = {course} />
      <Content parts = {parts} />
      <Total parts = {parts} />
    </div>
  )
}

export default App
