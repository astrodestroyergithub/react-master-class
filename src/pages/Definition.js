import { useState, useEffect } from 'react';

export default function Definition() {
    const [word, setWord] = useState('');

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
            .then((response) => response.json())
            .then((data) => {
                setWord(data[0].meanings)
                console.log(data)}
            );
    }, []);

    return (
        <>
            <p>Here is a definition:</p>
            {word ? 
                word.map((meaning) => {
                    return (
                        <p>
                            {meaning.partOfSpeech + ': '}
                            {meaning.definitions[0].definition}
                        </p>
                    );
                }) : <p>Loading...</p>}
        </>
    );
}