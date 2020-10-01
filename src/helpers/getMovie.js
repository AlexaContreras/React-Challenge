export const getMovie = async (movie) => {
  const url = `http://www.omdbapi.com/?apikey=541e1fe8&s=${movie}`;

  const resp = await fetch(url);
  const { Search } = await resp.json();

  const movieInfo = Search?.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      imdb: movie.imdbID,
      img: movie.Poster,
    };
  });

  return movieInfo;
};
