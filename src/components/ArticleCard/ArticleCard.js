import React from "react";
import './ArticleCard.css';

const ArticleCard = ({ article, title, byline, abstract, multimedia, openModal }) => {
  let image = multimedia ? <img src={multimedia[2].url} alt={multimedia[2].caption} /> : null
  
  return (
    <div className='article-card'
    onClick={() => {openModal(article)}}>
      {image}
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </div>
  )
}

export default ArticleCard;