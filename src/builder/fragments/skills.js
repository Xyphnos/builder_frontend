import React, {useEffect, useState} from 'react';
import { Grid, TextField, Card, Typography, Checkbox, Container } from '@material-ui/core';
import {skillData, skillValues} from '../utils/skillData'
import { useSelector } from 'react-redux';
import creationHooks from '../hooks/creationHooks'

const SkillBoard = () => {

    const currentState = useSelector(state => state.score);
    const profState = useSelector(state => state.prof);
    const [skills, setSkills] = useState(skillValues)
    const {integerizer} = creationHooks();


    const profTicker = (entry) => {

        if(skills[entry].prof == true){
            setSkills({...skills, [entry]: {value: 0, prof: false}})
        }
        else if(skills[entry].prof == false){
            setSkills({...skills, [entry]: {value: profState, prof: true}})
        }
    }

    const SkillGenerator = () => {

        return Object.keys(skillData).map(entry => (
                    <Grid container>
                        <Grid item xs={2}>
                            <Checkbox checked={skills[entry].prof} onChange={() => {profTicker(entry)}} inputProps={{ 'aria-label': 'controlled' }} size='small'/>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField InputProps={{readOnly: true}} value={integerizer(currentState[skillData[entry].ability], skills[entry].value)} size='small' fullWidth/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {entry}
                            </Typography>
                        </Grid>
                    </Grid>
                ))
    }

    return (
        <Grid container xs={11}>
            <Card>
                <SkillGenerator/>
            </Card>
        </Grid>

    )
}

export default SkillBoard