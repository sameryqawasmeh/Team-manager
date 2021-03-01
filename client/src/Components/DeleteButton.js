import React from 'react'
import axios from 'axios';
export default props => {
    const { teamId, successCallback } = props;
    const deleteTeam = e => {
        axios.delete('http://localhost:8000/api/deleteteam/' + teamId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deleteTeam}>
            Delete
        </button>
        
    )
}