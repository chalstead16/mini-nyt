import React, { useState, useEffect } from 'react';
import getArticles from '../../apiCalls';
import Header from '../Header/Header';
import AllArticles from '../AllArticles/AllArticles';
import Form from '../Form/Form';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    getArticles()
    .then(data => setArticles(data.results))
    .catch(err => {
      setError('Hmm, something went wrong...')
    })
  }, [])

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(search) || article.title.includes(search));

  return (
    <div className="App">
      <Header />
      <Form search={ search } setSearch={ setSearch }/>
      <AllArticles articles={ articles }/>
    </div>
  );
}

export default App;
