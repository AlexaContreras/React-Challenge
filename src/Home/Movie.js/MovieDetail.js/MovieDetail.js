import React from 'react';
import './MovieDetail.scss';
import image from '../../../assets/imgs/no-image.png';

export const MovieDetail = ({ imdb, img, title, year }) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 align-self-center movie'>
      <div className='results '>
        <article>
          {/* inside the article we display all the data received from the movie component  */}
          <h3>{title}</h3>
          <img src={img !== 'N/A' ? img : image} alt={title} />
          <p>
            {year} -{' '}
            <a href={`https://www.imdb.com/title/${imdb}/`}>VIEW ON IMDB</a>
          </p>
        </article>
      </div>
    </div>
  );
};
