import React, { useState } from 'react';
import './Search.scss';

export const Search = ({ setMovieName }) => {
  //setting the state of the input value
  const [inputValue, setInputValue] = useState('');

  //function to handle changes on the input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //this function prevents the default behavior of the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // this function handles the click of the button and sets the name of the movie the user types, it also checks if the value is longer than 2, at the end it sets the input to an empty string
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
          placeholder='Please search a movie'
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
