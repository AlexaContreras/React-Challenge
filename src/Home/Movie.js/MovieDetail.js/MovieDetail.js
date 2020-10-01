import React from 'react';
import './MovieDetail.scss';
export const MovieDetail = ({ imdb, img, title, year }) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 align-self-center movie'>
      <div className='results '>
        <article>
          <h3>{title}</h3>
          <img src={img} />
          <p>
            {year} -{' '}
            <a href={`https://www.imdb.com/title/${imdb}/`}>VIEW ON IMDB</a>
          </p>
        </article>
      </div>
    </div>
  );
};
