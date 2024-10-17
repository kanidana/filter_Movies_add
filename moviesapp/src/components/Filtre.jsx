import React, { useState } from 'react';

const Filtre = ({onFilter}) => {
    
        const [title, setTitle] = useState('');
        const [note, setNote] = useState('');

        const userClickButton =()=>{
            onFilter({title, note: parseFloat(note)})
        }

        return(
            <div className="bot">
                <input  type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/> <br/>

                <input type='number' placeholder='note' value={note} onChange={(e) => setNote(e.target.value)}/><br/>

                <button onClick={userClickButton}>Filtrer</button>
            </div>
        )
    
};

export default Filtre;