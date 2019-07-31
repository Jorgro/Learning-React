import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({ value, text }) => {
    return (
        <div>
            {text} {value} <br />
        </div>
    )
}

const Statistics = (props) => {
    const { good, bad, neutral } = props
    const all = good + bad + neutral
    const sum = good - bad
    if (all == 0) {
        return (
            <div>
                <h2> statistics </h2>
                <p>No feedback given</p>
            </div>


        )
    } else {
        return (
            <div>
                <h2> statistics </h2>
                <table>
                    <tbody>
                        <tr>
                            <th scope="col">good</th>
                            <th scope="col">neutral</th>
                            <th scope="col">bad</th>
                            <th scope="col">all</th>
                            <th scope="col">average</th>
                            <th scope="col">positive</th>
                        </tr>
                        <tr>
                            <td>{good}</td>
                            <td >{neutral}</td>
                            <td >{bad}</td>
                            <td >{all}</td>
                            <td >{sum / all}</td>
                            <td >{good / all * 100}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Statistics;