import React, { useEffect, useState } from 'react';
import { Grid, TextField, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ViewingStyle from '../styles/viewing_styles';
import { abilityScores } from '../utils/skillData';
import {scores} from '../redux/actions';



const AbilityScoreBoard = () => {

    const classes = ViewingStyle().SheetStyle();
    const [abilities, setAbilities] = useState({Strength: '', Dexterity: '', Constitution: '', Intelligence: '', Wisdom: '', Charisma: ''});
    const dispatch = useDispatch();

    const calculateAbility = (ability, a_score) => {
        if(!isNaN(+a_score)){
            const modifier = Math.floor((a_score - 10) / 2);
            setAbilities({...abilities, [ability]: modifier})
        }
    };

    useEffect(() => {
        dispatch(scores(abilities))
    },[abilities])
        
    return(
        <Container>
            { Object.keys(abilityScores).map( entry =>(
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                        <TextField label={`${entry}`} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={abilities[entry]} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder={abilityScores[entry].ab} inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility(`${entry}`, score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                ))}
        </Container>
    )
}

export default AbilityScoreBoard