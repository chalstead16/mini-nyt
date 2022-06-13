import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import getArticles from '../../apiCalls';
import Header from '../Header/Header';
import Form from '../Form/Form';
import AllArticles from '../AllArticles/AllArticles';
import SingleArticle from '../SingleArticle/SingleArticle';
import Footer from '../Footer/Footer';
import Error404 from '../Error404/Error404';
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
      <Routes>
        <Route path='/' 
          element={
          <AllArticles 
            articles={ filteredArticles }
            openModal={openModal}/>
          }
        />
        <Route path='/article:id' 
          element={
            <SingleArticle 
              showModal={showModal} 
              setShowModal={setShowModal}
              selectArticle={selectArticle}/>
          }
        />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
