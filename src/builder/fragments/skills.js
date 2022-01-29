import React, {useEffect, useState} from 'react';
import { Grid, TextField, Card, Typography, Checkbox, Container } from '@material-ui/core';
import {skillData} from '../utils/skillData'
import { useSelector } from 'react-redux';

const SkillBoard = () => {
            
    const currentState = useSelector(state => state.score);
    const [abilities, setAbilities] = useState({Strength: '', Dexterity: '', Constitution: '', Intelligence: '', Wisdom: '', Charisma: ''})
    const [proficiency, setProficiency] = useState(0)

    const checkProf = (prof) => {
        if(!isNaN(+prof)){
            setProficiency(prof)
        }
    }

    const SkillGenerator = () => {

        
        useEffect(() => {
            setAbilities(currentState)
        },[currentState])

        return Object.keys(skillData).map(entry => (
                    <Grid container>
                        <Grid item xs={2}>
                            <Checkbox size='small'/>
                        </Grid>
                        <Grid item xs={2}>
                            <TextField InputProps={{readOnly: true}} value={abilities[skillData[entry].ability]} size='small' fullWidth/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>
                                {skillData[entry].name}
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