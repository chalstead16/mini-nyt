import React from "react";
import './ArticleCard.css';

const ArticleCard = ({ title, byline, abstract, multimedia }) => {
  let image = multimedia ? <img src={multimedia[2].url} alt={multimedia[2].caption} /> : null
  
  return (
    <div className='article-card'>
      {image}
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </div>
  )
}

export default ArticleCard;