export const getMovie = async (movie) => {
  //url to omdb api
  const url = `http://www.omdbapi.com/?apikey=541e1fe8&s=${movie}`;

  // fetching the url
  const resp = await fetch(url);

  // search contains all the data needed
  const { Search } = await resp.json();

  // this constant stores each result fetched
  const movieInfo = Search?.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      imdb: movie.imdbID,
      img: movie.Poster,
    };
  });

  // return of the constant
  return movieInfo;
};
