import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'; */




const Header = (props) => {
    console.log(props)
    return (
        <h1> {props.course} </h1>
    )
}

const Part = (props) => {
    return (
        <p> {props.part.name} {props.part.exercises} </p>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
}


const Total = (props) => {
    const numb = props.numbers.map(part => part.exercises).reduce((total, num) => total + num)
    return (
        <p> Number of exercises {numb}</p>
    )
}

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
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total numbers={course.parts} />

        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
