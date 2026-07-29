
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
  const Header = ({ course }) => {
    (console.log(course))
  return <h1>{course}</h1>
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <p>
        {part1.name} {part1.exercises}
      </p>
      <p>
        {part2.name} {part2.exercises}
      </p>
      <p>
        {part3.name} {part3.exercises}
      </p>
    </div>
  )
}

const Total = ({ exercises }) => {
  const total = exercises.reduce((sum, n) => sum + n, 0)
  return <p>Number of exercises {total}</p>
}

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}
export default App