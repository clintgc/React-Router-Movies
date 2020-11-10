import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
  console.log(props);
  return (
    <div className="movie-list">
      {props.movie ? props.movie.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      )): <p>...loading</p> }
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;
  

  return (

    <div className="movie-card">
      <Link to={`Movies/${id}`}><h2>{title}</h2></Link>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
