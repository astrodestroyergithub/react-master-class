import { useState, useEffect } from 'react';

export default function Dictionary() {
    const [word, setWord] = useState('');

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
        </>
    );
}