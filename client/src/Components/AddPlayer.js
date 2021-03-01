import React, { useState } from 'react'
import axios from 'axios';
import { Link, navigate } from "@reach/router";
import { Paper,Card , TextField, InputLabel, Button, OutlinedInput, FormControl} from '@material-ui/core';
export default (props ) => {
    const { initialName, initialPreferredPosition,  onSubmitProp } = props;
    const [Name, setName] = useState(initialName); 
    const [PreferredPosition, setPreferredPosition] = useState(initialPreferredPosition);
    const [errors, setErrors] = useState([])
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({Name, PreferredPosition});
        
        }

    //onChange to update firstName and lastName
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
            <FormControl variant="outlined" >
                <copyInputLabel>Player Name: </copyInputLabel>
                <OutlinedInput type="text" onChange={(e)=>setName(e.target.value)} value={Name}/>
            </FormControl>
            </p>
            <p>
            <FormControl variant="outlined" >
                <copyInputLabel>Preferred Position: </copyInputLabel>
                <OutlinedInput type="text" onChange={(e)=>setPreferredPosition(e.target.value)} value={PreferredPosition}/>
            </FormControl>
            </p>
            <p>
            <Button type="submit" variant="contained" color="primary" onClick={(e) => navigate("/")}>
                submit
            </Button><br />
            </p>
            <p>
            <Button href="/player/list"> Go Back</Button>
            </p>
        </form>
      
    )
    
}
