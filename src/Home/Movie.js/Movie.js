import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { MovieDetail } from './MovieDetail.js/MovieDetail';
import './Movie.scss';

export const Movie = ({ movie }) => {
  const { data } = useFetch(movie);

  return (
    <>
      {!movie && (
        <div className='mt-5  alert-secondary alert' role='alert'>
          Please search a movie
        </div>
      )}
      {!data && movie && (
        <div className='mt-5 alert alert-secondary' role='alert'>
          No results found for {movie}
        </div>
      )}
      <div className='row '>
        {data?.map((movie) => (
          <MovieDetail key={movie.imdb} {...movie} />
        ))}
      </div>
    </>
  );
};
