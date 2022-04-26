import React from 'react';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> <div>
                <img className='movie-img' src={movie.img} alt='movie'></img>
            </div>)}
        </>
    );
};

export default MovieList;