import React, { useState, useEffect } from 'react';
import getArticles from '../../apiCalls';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getArticles()
    .then(data => setArticles(data.results))
    .catch(err => {
      setError('Hmm, something went wrong...')
    })
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
