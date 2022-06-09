import React from 'react';
import ArticleCard from '../ArticleCard/ArticleCard';
import './AllArticles.css';

const AllArticles = ({ articles }) => {
  let counter = 0
  const articlesData = articles.map( article => {
    counter += 1
    return <ArticleCard {...article} key={counter}/>
  })
  
  return (
    <div className='all-articles-container'>
      {articlesData}
    </div>
  )
}

export default AllArticles;