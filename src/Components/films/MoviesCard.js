import React from "react";

function MoviesCard (props){
   
        
      return(
          <div>
            <img className="  position: relative;
    width: 9000px;
    height: 9000px;
    object-fit: center;
    top: 0px;
    left: 0px;
    height: 200px;" src={props.poster} alt = {props.titre}/>
            <h2>{props.titre}</h2>
            <span>{props.description}</span>
          </div>
      );
    }  
  
  export default MoviesCard;