import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DefinitionSearch() {
    const [word, setWord] = useState('');

    let navigate = useNavigate();

    useEffect(() => {
        console.log('State Updated ', word);
    });

    // no dependency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed

    return (
        <form 
            className = "flex space-between flex-x-5 space-x-2 max-w-[300px]"
            onSubmit={() => {
            {navigate('/dictionary/' + word)
        }}}>
            <input className="shrink min-w-0 px-2 py-1 rounded" placeholder="Dinosaur" type="text" onChange={(e) => {
                setWord(e.target.value);
            }} />
            

            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-1 py-2 rounded">
                Search
            </button>
            
        </form>
        
    );
}