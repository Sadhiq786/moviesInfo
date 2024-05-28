import React from 'react';

const Posters = ({ movie }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }

  return (
    <div className='card'>
      <div className='details'>

        <div className='votes'>
          <div style={{ fontSize: "20px" }}>▲</div>
          <div>{movie.voting}</div>
          <div className='reverse' style={{ fontSize: "20px" }}>▲</div>
          <div>Votes</div>
        </div>

        <div>
          <img src={movie.poster || 'default-poster.jpg'} alt={movie.title} />
        </div>

        <div className='info'>
          <h3 style={{ fontFamily: "Times New Roman, Times, serif", fontWeight: "550" }}>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Director: {movie.director}</p>
          <p>Starring: {movie.stars}</p>
          <p>Language: {movie.language}</p>
          <p>Run time: {movie.runTime}min</p>     {/* optional */}
          <p>Release Date: {formatDate(movie.releasedDate)}</p>
          <p style={{ color: "#00798c" }}>
            <p>{movie.pageViews} views | Voted by {movie.voting} People</p>
          </p>
        </div>
      </div>
      <div>
        <button onClick={() => window.open(movie.trailer, "_blank")}>Watch Trailer</button>
      </div>
    </div>
  );
}

export default Posters;
