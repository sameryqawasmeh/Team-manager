import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';
import { Paper,Card , TextField, InputLabel, Button, OutlinedInput, FormControl} from '@material-ui/core';


export default props => {
    const [teams, setteams] = useState([]);
    const { removeFromDom } = props;
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/getteam/')
            .then(res => setteams(res.data));
    }, [])

    // const removeFromDom = teamId => {
    //     setteams(teams.filter(team => team._id != teamId))
    // }

    const deleteTeam = (teamId) => {
        axios.delete('http://localhost:8000/api/deleteteam/' + teamId)
            .then(res => {
                removeFromDom(teamId)
            })
    }


    return (
        // <div>
        //     {props.products.map((product, idx)=>{
        //         return <p key={idx}>
                
        //             {product.Title} 
        //             ,
        //             <button onClick={(e)=>{deleteProduct(product._id)}}>
        //                 Delete
        //             </button>
        //         </p>
        //     })}
            
        // </div>

        <div>
            <Link to={"/player/list"}> List </Link>
            <space> 
                |
            </space>
            <Link to={"/players/addplayer"}> Add Player</Link>



            {props.teams.map((team, idx) => {
                return (
                    <p key={idx}>
                        <Link to={ "/"+team._id + "/detail"}>
                        <td>{team.Name}</td>
                        
                        </Link> |  {team.PreferredPosition} 
                        <space>   </space>
                        |
                        {/* <Link to={ "/"+team._id + "/edit"}>
                            Edit
                        </Link>  |   */}
                        <space>   </space>
                    <Button type="submit" variant="contained" color="secondary" onClick={(e)=>{deleteTeam(team._id)}}>
                    Delete
                    </Button>
                    </p>
                )
            })}
        </div>
    )
}