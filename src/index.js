import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}
const Part = (props) => {
    const part = props.part
    return (
        <p> {part.name} {part.exercises} </p>
    )
}

const Content = (props)=> {
    const parts = props.course.parts
    return (
        <>
        <Part part={parts[0]} />
        <Part part={parts[1]} />
        <Part part={parts[2]} />
        </>
    )
}

const Total = (props) => {
    const parts = props.course.parts
    return (
        <p>Yhteensä {parts[0].exercises + parts[1].exercises + parts[2].exercises} tehtävää </p>
    )
}
const App = () => {
  const course = {
      name: 'Half stack sovelluskehitys',
      parts: [
          {
          name: 'Reactin perusteet',
          exercises: 10
        }, 
        {
            name: 'Teidon välitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        }
      ]
  }


  return (
    <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))