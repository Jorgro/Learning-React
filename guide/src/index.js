import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* 
const Display = ({ counter }) => {
    return (
        <div>{counter}</div>
    )
}

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}
const App = (props) => {
    const [counter, setCounter] = useState(0)
 */
/*   setTimeout(
      () => setCounter(counter + 1),
      1000
  ) */

/*     const setToValue = (value) => () => setCounter(value)

    return (
        <>
            <Display counter={counter} />
            <Button handleClick={setToValue(counter + 1)} text="plus" />
            <Button handleClick={setToValue(0)} text="zero" />
            <Button handleClick={setToValue(counter - 1)} text="minus" />
        </>
    )
}

let counter = 1;

ReactDOM.render(<App counter={counter} />
    , document.getElementById('root')) */

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:31.098Z',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only Javascript',
        date: '2019-05-30T18:39:34.091Z',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2019-05-30T19:20:14.298Z',
        important: true
    }
]

const App = (props) => {
    const { notes } = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => <li key={note.id}>{note.content}</li>)}
            </ul>
        </div>
    )
}

ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
)