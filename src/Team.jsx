import { useState } from "react"

export default function Team(){

    const [team, setCount] = useState(11);

    const handleAdd = ()=>{
      const newTeam1 = team + 1;
        setCount(newTeam1);
    };

    const handleRemove = ()=>{
        const newTeam = team - 1;
        setCount(newTeam)
    };
    
    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
    };

    return (
        <div style={teamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>player</button>
            <button onClick={handleRemove}>player Remove</button>
        </div>
    )
}