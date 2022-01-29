import React, {useState, useEffect} from 'react';
import { Grid, TextField, Card, Typography, Checkbox, Container } from '@material-ui/core';
import { abilityScores } from '../utils/skillData';
import { useSelector } from 'react-redux';

const SavingThrows = () => {
    
    const [abilities, setAbilities] = useState({Strength: '', Dexterity: '', Constitution: '', Intelligence: '', Wisdom: '', Charisma: ''})
    const [proficiency, setProficiency] = useState(0)

    const checkProf = (prof) => {
        if(!isNaN(+prof)){
            setProficiency(prof)
        }
    }


    const Generate_throws = () => {

        const currentState = useSelector(state => state.score)

        return Object.keys(abilityScores).map( score =>(
                <Grid container alignItems='center' xs={12}>
                    <Grid item xs={2}>
                        <Checkbox size='small'/>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField InputProps={{readOnly: true}} value={currentState[score]} size='small' fullWidth/>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography>
                            {score}
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