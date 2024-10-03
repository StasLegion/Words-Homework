import { Link } from 'react-router-dom';
import nouns from "../nouns";

const Words = () => {
    return (
        <div>
            <h2>Выбери букву:</h2>
            <div>
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map(letter => (
                    <Link key={letter} to={`/words/${letter.toLowerCase()}`} style={{ margin: '0 10px' }}>
                        {letter}
                    </Link>
                ))}
            </div>

            <h2>Все слова:</h2>
            <div>
                {nouns.map((noun) => (
                    <Link key={noun} to={`/words/detail/${noun}`} style={{ margin: '0 10px' }}>
                        {noun}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Words;