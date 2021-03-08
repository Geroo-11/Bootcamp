import React from 'react'
import ReactDOM from 'react-dom'

/*const Tilte = ({message}) => <h1>{message}</h1>*/

const Title = (props) => {
  return <h1 style={{color: props.color}}>
        {props.message}
      </h1>
}

const Parts = ({message,cantidad}) => <p>{message} {cantidad}</p>

const Total = ({a,b,c}) => <p>Number of exercises {a+b+c}</p>

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
    < Title color='red' message={course} />
    < Parts message={part1} cantidad={exercises1}  />
    < Parts message={part2} cantidad={exercises2}  />
    < Parts message={part3} cantidad={exercises3}  />
    < Total a={exercises1} b={exercises2} c={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))