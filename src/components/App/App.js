import React, { useState, useEffect } from 'react';
import getArticles from '../../apiCalls';
import Header from '../Header/Header';
import Form from '../Form/Form';
import AllArticles from '../AllArticles/AllArticles';
import SingleArticle from '../SingleArticle/SingleArticle';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectArticle, setSelectArticle] = useState(null);

  useEffect(() => {
    getArticles()
    .then(data => setArticles(data.results))
    .catch(err => {
      setError('Hmm, something went wrong...')
    })
  }, [])

  const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()));

  const openModal = (article) => {
    setSelectArticle(article)
    setShowModal(prev => !prev)
  }

   return (
    <div className="App">
      <Header />
      <Form search={ search } setSearch={ setSearch }/>
      <AllArticles articles={ filteredArticles } openModal={openModal}/>
      {showModal && <SingleArticle 
        showModal={showModal} 
        setShowModal={setShowModal}
        selectArticle={selectArticle}
      />
      }
    </div>
  );
}

export default App;
