import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dictionary() {
    const [word, setWord] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        console.log('State Updated ', word);
    });

    // no dependency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed

    return (
        <>
            <input type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            <h1>Let's get the definition for {word}</h1>

            <button onClick={() => 
                {navigate('/definition/' + word)
            }}>
                Search
            </button>
        </>
    );
}