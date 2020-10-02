import React, { useState } from 'react';

import './Home.scss';
import { Search } from './Search/Search';
import { Movie } from './Movie.js/Movie';

export const Home = () => {
  //setting the state to receive the name of the movie the user types in the input
  const [movie, setMovieName] = useState('');

  return (
    <div className='App'>
      <header>
        <h1>
          <span>// </span> React challenge
        </h1>
      </header>
      <main>
        <Search setMovieName={setMovieName} />

        <Movie movie={movie} />
      </main>
    </div>
  );
};

export default Home;
