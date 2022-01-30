import React, {useState, useEffect} from 'react';
import { Grid, TextField, Card, Typography, Checkbox, Container } from '@material-ui/core';
import { abilityScores } from '../utils/skillData';
import { useDispatch, useSelector } from 'react-redux';
import {prof} from '../redux/actions'
import creationHooks from '../hooks/creationHooks';

const SavingThrows = () => {
    
    const dispatch = useDispatch();
    const currentState = useSelector(state => state.score)
    const profState = useSelector(state => state.prof)
    const [abilities, setAbilities] = useState(abilityScores)
    const [proficiency, setProficiency] = useState(0)
    const { integerizer } = creationHooks();

    const checkProf = (prof) => {
        if(!isNaN(+prof)){
            setProficiency(prof)
        }
    }

    const profTicker = (entry) => {

        if(abilities[entry].prof == true){
            setAbilities({...abilities, [entry]: {value: 0, prof: false}})
        }
        else if(abilities[entry].prof == false){
            setAbilities({...abilities, [entry]: {value: profState, prof: true}})
        }
    }

    useEffect(() => {
        dispatch(prof(proficiency))
    },[proficiency])


    const Generate_throws = () => {

        return Object.keys(abilityScores).map( entry =>(
                <Grid container alignItems='center' xs={12}>
                    {console.log(abilities)}
                    <Grid item xs={2}>
                        <Checkbox checked={abilities[entry].prof} onChange={() => {profTicker(entry)}} inputProps={{ 'aria-label': 'controlled' }} size='small'/>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField InputProps={{readOnly: true}} value={integerizer(currentState[entry], abilities[entry].value)} size='small' fullWidth/>
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
        <Grid container style={{paddingBottom: '8px'}}>
            <Grid container xs={11}>
                <Grid item xs={3}>
                    <TextField variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={9}>
                    <TextField value='Inspiration' InputProps={{readOnly: true}}  variant="outlined" fullWidth/>
                </Grid>
            </Grid>
            <Grid container xs={11}>
                <Grid item xs={3}>
                    <TextField onChange={(num) => {checkProf(num.target.value)}} variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={9}>
                    <TextField value='Proficiency Bonus' InputProps={{readOnly: true}}  variant="outlined" fullWidth/>
                </Grid>
            </Grid>
            <Grid container xs={11}>
                <Card>
                    <Grid container alignItems='center' xs={12}>
                        <Generate_throws/>
                    </Grid>
                </Card>
            </Grid>
            <Grid container xs={11}>
                
            </Grid>
    </Grid>
    )
}

export default SavingThrows