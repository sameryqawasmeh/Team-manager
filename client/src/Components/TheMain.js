import React, { useEffect, useState } from 'react'
import { Link } from '@reach/router';
import { Paper,Card  } from '@material-ui/core';

export default () => {

    return (
        <div>
            
            <Paper elevation={10}>
            <br />
                <Link to={`/player/list`}> Go to Add A Prroduct</Link>
            <br />
            <br />
            </Paper>
        
        </div>
    )
}
