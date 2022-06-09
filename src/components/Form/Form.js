import {React, useState} from "react";
import './Form.css';

const Form = ({ search, setSearch }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  
  return (
    <form className='form-container'>
      <input
      className='search' 
      type='search'
      placeholder='serach articles'
      value={search}
      onChange={handleSearch}/>
    </form>
  )
}

export default Form; 