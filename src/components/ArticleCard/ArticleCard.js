import React from "react";
import { Link } from "react-router-dom";
import './ArticleCard.css';

const ArticleCard = ({ article, title, byline, abstract, multimedia, openModal, id }) => {
  let image = multimedia ? <img src={multimedia[2].url} alt={multimedia[2].caption} /> : null
  
  return (
    <Link to={`/article${id}`} style={{color:"#000000", textDecoration:"none"}} className='article-card' onClick={() => {openModal(article)}}>
      {image}
      <h2>{title}</h2>
      <h3>{byline}</h3>
      <p>{abstract}</p>
    </Link>
  )
}

export default ArticleCard;