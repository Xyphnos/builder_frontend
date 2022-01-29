import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import ViewingStyle from '../styles/viewing_styles';
import { abilityScores } from '../utils/skillData';
import score from '../redux/actions';



const AbilityScoreBoard = () => {

    const classes = ViewingStyle().SheetStyle();
    const [abilities, setAbilities] = useState({Strength: '', Dexterity: '', Constitution: '', Intelligence: '', Wisdom: '', Charisma: ''});
    const currentState = useSelector(state => state.score)
    const dispatch = useDispatch();

    const calculateAbility = (ability, a_score) => {
        if(!isNaN(+a_score)){
            const modifier = Math.floor((a_score - 10) / 2);
            setAbilities({[ability]:modifier})
            dispatch(score(ability))
        }
    };

    useEffect(() => {

    },[abilities])

        /*
        return (
            <Grid container alignItems="center" justifyContent="center" direction='column'>
                <Grid container>
                    <Grid item>
                        <TextField label={'Strength'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Strength} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='STR' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Strength', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label={'Dexterity'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Dexterity} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='DEX' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Dexterity', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label={'Constitution'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Constitution} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='CON' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Constitution', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label={'Intelligence'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Intelligence} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='INT' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Intelligence', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label={'Wisdom'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Wisdom} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='WIS' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Wisdom', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <TextField label={'Charisma'} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={Charisma} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item className={classes.abilityScores}>
                        <TextField placeholder='CHA' inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility('Charisma', score.target.value)} } size='small' fullWidth/>
                    </Grid>
                </Grid>
            </Grid>
    )}
    */
        
    return Object.keys(abilityScores).map( entry =>(
    <Grid container>
        <Grid item>
            <TextField label={`${entry}`} InputProps={{readOnly: true}} InputLabelProps={{ shrink: true }} value={abilities[entry]} variant="outlined" fullWidth/>
        </Grid>
        <Grid item className={classes.abilityScores}>
            <TextField placeholder={abilityScores[entry].ab} inputProps={{style: {padding: 5}}} variant="outlined" onChange={(score) => {calculateAbility(`${entry}`, score.target.value)} } size='small' fullWidth/>
        </Grid>
    </Grid>
    ))

}

export default AbilityScoreBoard