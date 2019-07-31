import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Statistics from './components/Statistics';



const Feedback = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addPositive = () => {
        return (
            setGood(good + 1)
        )
    }

    const addNegative = () => {
        setBad(bad + 1)
    }

    const addNeutral = () => {
        setNeutral(neutral + 1)
    }

    return (
        <>
            <h2> give feedback </h2>
            <Button handleClick={addPositive} text="good" />
            <Button handleClick={addNeutral} text="neutral" />
            <Button handleClick={addNegative} text="bad" />
            <Statistics good={good} bad={bad} neutral={neutral} />
        </>
    )
}

const Anecdotes = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
    const [mostVotes, setMostVotes] = useState("")

    const selectNewAnecdote = () => {
        const random = Math.floor((Math.random() * anecdotes.length));
        console.log(random)
        return (
            setSelected(random)
        )
    }

    const vote = () => {
        const copy = { ...points }
        copy[selected] += 1
        setPoints(copy)
        var highest = 0;
        var i;
        for (i = 0; i < anecdotes.length; i++) {
            if (points[i] > points[highest]) {
                highest = i;
            }
        }
        console.log(highest)
        setMostVotes(anecdotes[highest])
    }

    return (
        <div>
            {anecdotes[selected]} <br />
            <p> has {points[selected]} votes</p>
            <Button handleClick={vote} text="vote" />
            <Button handleClick={selectNewAnecdote} text="next anecdote" /> <br />
            <h2> Anecdote with most votes</h2>
            {mostVotes}
        </div>
    )


}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = () => {

    return (
        <Anecdotes anecdotes={anecdotes} />
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)