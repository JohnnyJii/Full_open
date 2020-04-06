import React, { useState } from "react"
import ReactDOM from "react-dom"
import './index.css'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, result}) => {
    return(
        <tr>
            <th> {text} </th>
            <th> {result} </th>
        </tr>
    )
}

const Statistics = ({
    good,
    neutral,
    bad,
    allStats,
    getAverage,
    getPositive,
}) => {
    if (allStats === 0 ) {
        return <div>Ei huonoa palutetta</div>;
    } else {
        return (
            <table>
                <tbody className="text">
                    <Statistic text="good" result={good} />
                    <Statistic text="bad" result={bad} />
                    <Statistic text="neutral" result={neutral} />
                    <Statistic text="all" result={allStats} />
                    <Statistic text="average" result={getAverage} />
                    <Statistic text="positive" result={getPositive} />
                </tbody>
            </table>
        )
    }
}

const App =()=> {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);

    const totalStats = (good * 1) + (bad * -1) + (neutral * 0);
    const allStats = good + bad + neutral;
    const getAverage = totalStats ? ( totalStats / allStats ).toFixed(2) : 0;
    const getPositive = allStats ? ((good / allStats) * 100).toFixed(0) : "0";

    return (
        <>
        <h1>Anna palautetta</h1>
        <div className="btn">
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        </div>
        <h1>Statistiikka</h1>
            <Statistics 
                good={good}
                bad={bad}
                neutral={neutral}
                allStats={allStats}
                getAverage={getAverage}
                getPositive={getPositive}
            />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));