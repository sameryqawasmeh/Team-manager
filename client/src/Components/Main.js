import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AddPlayer from '../Components/AddPlayer';
import { Link, navigate } from '@reach/router';
import PlayerList from './PlayerList';
import DeleteButton from './DeleteButton'; 
import { Paper,Card , TextField, InputLabel, Button, CardContent } from '@material-ui/core';

export default () => {

    const [teams, setteams] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    
    useEffect(() =>{
        axios.get('http://localhost:8000/api/findAllTeam')
        .then(res => {
            setteams(res.data);
            setLoaded(true);
        });
    }, [teams, loaded]);

    const removeFromDom = teamId => {
        setteams(teams.filter(team => team._id != teamId));
    }
    

    const createTeam = team => {
        axios.post('http://localhost:8000/api/team', team)
            .then(res=>{
                setteams([...teams, res.data]);
            })
    }

    return (
        
        <div>
            <Card>
                <CardContent>
                    <h3><Link to ={"/player/list"}>Manage Players</Link> | <Link to ={"/"}>Manage Player Status</Link></h3>
                </CardContent>
            </Card>

            <AddPlayer onSubmitProp={createTeam} initialName="" initialPreferredPosition=""  />
            
            <Paper elevation={10}>
            
                {loaded && <PlayerList teams={teams} removeFromDom={removeFromDom}/>}
                
                
            </Paper>
            {/* <ProductForm />
            
                {products.length > 0 &&
                    products.map((product, index) => {
                        
                        return( <>
                        <div key={index}> {product.Title} </div> 
                        <Link to={`/${ product._id }/detail`}>Detail</Link> 
                            |
                        <Link to={`/${ product._id }/edit`}> Edit</Link>
                        
                        <br />
                        </>
                        )
                    })}
                <hr/>
                {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>} */}

        </div>
    )
}
