import { getMovie } from '../helpers/getMovie';
import { useState, useEffect } from 'react';

export const useFetch = (movie) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getMovie(movie).then((dataFetch) => {
      setstate({
        data: dataFetch,
        loading: false,
      });
    });
  }, [movie]);

  return state;
};
