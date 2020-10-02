import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { MovieDetail } from './MovieDetail.js/MovieDetail';
import './Movie.scss';

export const Movie = ({ movie }) => {
  // fetching the data from useFetch hook
  const { data } = useFetch(movie);

  return (
    <>
      {/* it is shown when no searches have been made */}
      {!movie && (
        <div className='mt-5  alert-secondary alert' role='alert'>
          Please search a movie
        </div>
      )}

      {/* it is shown when there are no results available */}
      {!data && movie && (
        <div className='mt-5 alert alert-secondary' role='alert'>
          No results found for {movie}
        </div>
      )}

      {/* movieDetail container */}
      <div className='row moviesDetailWrapper'>
        {data?.map((movie) => (
          <MovieDetail key={movie.imdb} {...movie} />
        ))}
      </div>
    </>
  );
};
