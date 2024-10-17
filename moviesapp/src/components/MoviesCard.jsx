import React, { useState } from 'react';

const MoviesCard = ({onAdd}) => {
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [note, setNote] = useState('');
    const [poster, setPoster] = useState('');

    const auClick = (e)=>{
        e.preventDefault()
        onAdd({titre, description, poster, note: parseFloat(note)});
        setDescription("");
        setPoster("");
        setTitre("");
        setNote("");
    }

    return (
        <form onSubmit={auClick}>
            <input type='text' placeholder='Titre' value={titre} onChange={(e)=>{
                setTitre(e.target.value)}} required 
            /><br/>

            <input type='text' placeholder='Description' value={description} onChange={(e)=>{
                setDescription(e.target.value)}} required 
            /><br/>

            <input type='text' placeholder='Poster' value={poster} onChange={(e)=>{
                setPoster(e.target.value)}} required 
            /><br/>

            <input type='text' placeholder='Note' value={note} onChange={(e)=>{
                setNote(e.target.value)}} required 
            /><br/>

            <button type='submit'>Ajouter Film</button>
        </form>
    )
};

export default MoviesCard;