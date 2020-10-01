import React, { useState } from 'react';
import './Search.scss';

export const Search = ({ setMovieName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (inputValue.trim().length > 2) {
      setMovieName(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className='searchComponent'>
      <h2>Search OMDB</h2>
      <form className='searchForm' onSubmit={handleSubmit}>
        <input
          className='input form-control'
          type='text'
          placeholder='Type here'
          name='searchTerm'
          onChange={handleChange}
        />
        <button className='btn btn-light  ' onClick={handleClick} type='submit'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};
