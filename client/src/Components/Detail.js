import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate} from '@reach/router';
import DeleteButton from './DeleteButton';
import { Paper,Card , TextField, InputLabel, Button, CardContent } from '@material-ui/core';
export default props => {
    const [team, setteam] = useState({})
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/getteam/" + props.id)
            .then(res => setteam(res.data))
    }, [])

    
    return (
        <div>
            <Card>
                <CardContent>
                    <h1>Detail Of Player</h1>
                </CardContent>
            </Card>

            <p>Name: {team.Name}</p>
            <p>Preferred Position: {team.PreferredPosition}</p>
            
            {/* <DeleteButton productId={product._id} successCallback={() => navigate("/product")} /> */}
            <br />
            <Button href="/player/list"> Go Back</Button>
            <br />
            <Button type="submit" variant="contained" color="primary" onClick={(e) => navigate("/player/list")}>
                submit
            </Button><br />
        </div>
    )
}