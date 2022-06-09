import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './AllArticles.css';

const AllArticles = ({ articles, openModal }) => {
  let counter = 0
  
  const articlesData = articles.map( article => {
    counter += 1
    article.id = counter;
    return <ArticleCard article={article} {...article} key={counter} openModal={openModal}/>
  })
  
  return (
    <div className='all-articles-container'>
      {articlesData}
    </div>
  )
}

export default AllArticles;