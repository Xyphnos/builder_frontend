
import React from 'react';
//import CompleteData from '../hooks/listingHooks'
import { Card, Typography, Grid } from '@material-ui/core'
import {useNavigate} from 'react-router-dom'
import {displayData} from '../utils/testingData'

const Selection = () => {

    let navigate = useNavigate();


    //const { SavedCharacters } = CompleteData();

    const Listing = () => {
        const data = Object.keys(displayData).map(entry => (
            <Card styles={{height: '100%'}} onClick={() => {navigate('/characterSheet/' + displayData[entry].id)}}>
                <Grid container justifyContent="center" alignItems="center" spacing={1}>
                    <Grid item xs={8}>
                        <Typography>
                            {displayData[entry].name}
                        </Typography>
                    </Grid>
                    <Grid item spacing={1} xs={4}>  
                            {Object.keys(displayData[entry].classes).map(classEntry => (
                                <Typography>
                                    {displayData[entry].classes[classEntry].name}
                                </Typography>
                            ))}
                    </Grid>
                </Grid>
            </Card>
        ))

        return data
    }

    return {Listing}
}

export default Selection