// import React from 'react';
import React, {useState} from 'react';
import MoviesCard from '../films/MoviesCard';
import movies from "../note/Note";

function MoviesList() {
    const [search, setSearch]= useState("")

    return(

        <div className='App'>
            <input type="search" name='' placeholder='filtrer un film' onChange={(e)=>setSearch(e.target.value)}/>
            {movies
              .filter((movie)=>{
               return movie.Titre.toLowerCase().includes(search);
             })
            .map((movies, index)=>(
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