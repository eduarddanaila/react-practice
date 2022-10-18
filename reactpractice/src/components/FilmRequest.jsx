import { useState, useEffect } from 'react';
import axios from 'axios';

const key = 'da5e432d';
const FilmReq = () => {
  const [title, setTitle] = useState('');
  const [film, setFilm] = useState('');

  useEffect(() => {
    const getFilm = async () => {
      const res = await axios.get(`http://www.omdbapi.com/?apikey=${key}&t=${title}`);
      setFilm(res.data);
      console.log(res);
    };
    getFilm();
  }, [title]);

  if (film) {
    return (
            <>
                <label>Movie Title</label>
                <input type="text" id="FilmTitle" value={title} onChange={(event) => setTitle(event.target.value)} />
                <h4>{film.Title}</h4>
                <img src={film.Poster} />
                <p>Directed by: {film.Director}</p>
                <p>Genre: {film.Genre}</p>
                <p>Release date: {film.Released}</p>
                <p>Plot: {film.Plot}</p>
            </>
    );
  }
  return <p>Loading...</p>;
};
export default FilmReq;
