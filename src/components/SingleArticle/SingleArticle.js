import React from "react";
import './SingleArticle.css'

const SingleArticle = ({showModal, setShowModal, selectArticle}) => {
  let image = selectArticle.multimedia ? <img src={selectArticle.multimedia[1].url} alt={selectArticle.multimedia[1].caption} /> : null
  
  let year = selectArticle.published_date.split('-')[0]

  return (
    <div 
      className='overlay'
      onClick={() => {setShowModal()}}
    >
      <div 
        className='single-article-container'
        onClick={() => {setShowModal()}}
      >
        <div className='content'>
          <h2>{selectArticle.title}</h2>
          <div className ='img-container'>
            {image}
          </div>
          <h3>{selectArticle.byline}</h3>
          <div className='content-container'>
            <p>{selectArticle.abstract}</p>
            <a className='article-link' href={selectArticle.short_url} target='_blank'>Read More</a>
            <p>Section: {selectArticle.section} | Subsection: {selectArticle.subsection}</p>
            <p>Year Published: {year}</p>
            <button onClick={() => {setShowModal()}}>back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle;