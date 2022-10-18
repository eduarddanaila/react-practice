/* eslint-disable no-console */
import axios from 'axios';
import { useState } from 'react';
import Film from './Film.jsx';

const key = 'da5e432d';

function OMDB() {
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);

  const searchFilms = async () => {
    const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&s=${title}`);
    console.log('RES:', res);
    setFilms(res.data.Search);
  };

  return (

        <label htmlFor="movieTitle">
            Title:
            <input id="movieTitle" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button type="button" onClick={searchFilms}>SEARCH</button>
            {
                films.map((film) => (
                    <Film
                        key={film.imdbID}
                        title={film.Title}
                        year={film.Year}
                        poster={film.Poster}
                        />
                ))
            }
       </label>

  );
}
export default OMDB;
