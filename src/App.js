import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LetterWords from "./components/words/LetterWords.js";
import Words from "./components/words/Words.js";
import nouns from "./components/nouns.js";

const HomePage = () => {
    return <h1>Словарь</h1>;
};

const WordDetail = ({ word }) => {
    return (
        <div style={{ textAlign: 'center', fontSize: '48px' }}>
            {word}
        </div>
    );
};



const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Домой</Link>
                    {' | '}
                    <Link to="/words">Слова</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/words" element={<Words />} />
                    <Route path="/words/:letter" element={<LetterWords />} />
                    <Route path="/words/detail/:word" element={({ match }) => <WordDetail word={match.params.word} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;