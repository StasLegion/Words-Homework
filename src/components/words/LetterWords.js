import React from 'react';
import { useParams, Link } from 'react-router-dom';
import nouns from "../nouns";

const LetterWords = () => {
    const { letter } = useParams(); // Используем useParams для получения параметра letter
    const startsWith = nouns.filter(word => word.startsWith(letter));
    const includes = nouns.filter(word => word.includes(letter) && !word.startsWith(letter));

    return (
        <div>
            <h2>Слово начинается с буквы "{letter}":</h2>
            <div>
                {startsWith.map((word) => (
                    <Link key={word} to={`/words/detail/${word}`} style={{ margin: '0 10px' }}>
                        {word}
                    </Link>
                ))}
            </div>
            <br />
            <h2>В слове есть буква : "{letter}"</h2>
            <div>
                {includes.map((word) => (
                    <Link key={word} to={`/words/detail/${word}`} style={{ margin: '0 10px' }}>
                        {word}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LetterWords;