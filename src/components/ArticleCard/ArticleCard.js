import React from "react";
import './ArticleCard.css';

const ArticleCard = ({ title, byline, abstract, multimedia, key }) => {
  return (
    <div className='article-card' key={key}>
      <img src={multimedia[2].url} alt={multimedia[2].caption} />
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </div>
  )
}

export default ArticleCard;