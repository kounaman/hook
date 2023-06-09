import React from 'react';
import MoviesCard from '../films/MoviesCard';
import movies from "../note/Note";

function MoviesList() {

    return(
        <div className='  position: relative;
        width: 9000px;
        height: 9000px;
        object-fit: center;
        top: 0px;
        left: 0px;
        height: 200px;'>
            {movies.map((movies, index)=>(
               <div key={index}>
               <MoviesCard
               titre={movies.Titre}
               poster={movies.Poster}
               description={movies.Description}
               />
             </div>
            ))}
        </div>
    );
    
}
export default MoviesList;