import { useState,useEffect } from "react";
import Github from "./Github";

export default function App() {
    let [ value, updateState ] = useState(0);
    // useEffect(() => {
    //     document.title = `Counter: ${value}`;
    // }, [value])
    return (
        <>
        <h1>Counter App with Hook</h1>
        <h3>{value}</h3>
        <button onClick={() => {
            updateState(value + 1)
        }}>Increment</button>

<button onClick={() => {
            updateState(value - 1)
        }}>Decrement</button>
        
        <button onClick={() => {
            updateState(0)
        }}>Reset</button>
        <div>
        <Github />
        </div>
        </>
        )
}