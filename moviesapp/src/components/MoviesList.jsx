import React from 'react';

// Définition du composant MoviesList qui affiche la liste des films
const MoviesList = ({ films }) => {
    return (
        <div>
            {/* Parcourt la liste des films et affiche chaque film */}
            {films.map((film, index) => (
                <div key={index}>
                    
                    <h1 style={{color:"white"}}>{film.titre}</h1>
                    <p style={{color:"white"}}> Rate: {film.note}</p>
                    <p style={{color:"white"}}>{film.description}</p>
                     {/* Affiche l'image du poster du film */}
                    <img style={{width:"20rem"}} src={film.poster} alt='Poster du film' />

                </div>
            ))}
        </div>
    );
};

export default MoviesList;
