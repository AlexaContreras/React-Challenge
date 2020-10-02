import { getMovie } from '../helpers/getMovie';
import { useState, useEffect } from 'react';

export const useFetch = (movie) => {
  //initializing the state to receieve data
  const [state, setstate] = useState({
    data: [],
  });

  // using the helper to fetch the data from the omdb API

  useEffect(() => {
    getMovie(movie).then((dataFetch) => {
      // setting the state
      setstate({
        data: dataFetch,
      });
    });
  }, [movie]);

  // returning the state fetched
  return state;
};
