import React from "react";
import Link from "next/link";

const MovieData = ({ movies }) => {
    // console.log(movies.imdbID)
    return (
         <div className="container">
            <div className="row">
            {movies.map(movie => (
                <Link href={`/${movie.imdbID}`}>
                <div  className='cards inlineblock' >
                    <img src={movie.Poster} alt={movie.Title + 'poster'}></img>
                    <div key={movie.imbdID} className='card--content'>
                        <h3 className='card--title'>{movie.Title}</h3>
                        <p><small>Release date: {movie.Year} </small></p>
                        <p><small>Rating: {movie.vote_average} </small></p>
                        <p className='card--desc'>{movie.overview}</p>
                    </div>
                </div>
                </Link>
                ))}
             </div>
         </div>
    );
};

export default MovieData;