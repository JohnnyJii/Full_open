import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course}) => {
    return (
        <div>
            <h1>
                {course}
            </h1>
        </div>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map((item, index) => (
                <Part key={index} part={item.name} exercises={item.exercises} />
            ))}
        </div>
    )
}

const Part = ({part, exercises}) => {
    return (
        <p>
            {part} {exercises}
        </p>
    )
}

export const Total = ({ parts }) => {
    const total = parts.reduce((acc, item) => acc + item.exercises, 0);
    return (
        <>
            <p>Number of exercises</p>
        </>
    )
}

const App =()=> {
    const course = {
        name: "Half stack app developement",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10,
            },
            {
                name: "Using props to pass data",
                exercises: 7,
            },
            {
                name: "State of a component",
                exercises: 14,
            },
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
ReactDOM.render(<App />, 
    document.getElementById("root"));