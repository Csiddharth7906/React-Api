import axios from './Axos';
import React, { useEffect, useState } from 'react'

// Services Component
const Services = () => {
    // --- useState Hooks ---

    // first: holds a string of normal data
    // setfirst: function to update the 'first' state
    const [first, setfirst] = useState("This is normal data");

    // second: holds a string of large data
    // setsecond: function to update the 'second' state
    const [second, setsecond] = useState("this is very large data ");

    // --- useEffect Hook ---
    // This effect runs every time the value of 'second' changes
    // It's also called the *dependency* array — here it watches 'second'
    const getuser = () =>{
    const api ="/users";

    axios.get("/users").then((users)=>{

        console.log(users)  ; // Will log the array of user objects); // Will log the array of user objects
    }).catch((err)=>console.log(err))
}
    useEffect(() => {
        getuser();
        console.log("Services component mounted! ^^"); // Runs on first render (mount)

        // Cleanup function: runs when component unmounts OR before re-running the effect
        return () => {
            console.log("Services component unmounted! ^^"); // Will log when 'second' changes or component is destroyed
        };
    }, [second]); // Dependency: only runs when 'second' changes

    return (
        <div>
            {/* Displaying the current value of 'first' state */}
            <h1>{first}</h1>

            {/* Button to change 'first' state — when clicked, updates the displayed text */}
            <button
                onClick={() => setfirst("Normal Data has been changed")} // Updates 'first' value
                className='rounded-full mb-10 bg-red-200 p-2'
            >
                Change Normal Data
            </button>

            {/* Displaying the current value of 'second' state */}
            <h1>{second}</h1>

            {/* Button to change 'second' state — also triggers useEffect */}
            <button
                onClick={() => setsecond("Large Data has been changed")} // Updates 'second' value and triggers useEffect
                className='rounded-full mb-10 bg-blue-200 p-2'
            >
                Change Large Data
            </button>
        </div>
    );
}

export default Services;
