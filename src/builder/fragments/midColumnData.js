import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, TextField, Container, Card, Checkbox, Typography, FormControlLabel } from '@material-ui/core';
import ViewingStyle from '../styles/viewing_styles';

const MidColumn = () => {

    const classes = ViewingStyle().SheetStyle();
    const currentState = useSelector(state => state.score)

    return (         
        <Container>
            <Grid container spacing={1}>
                <Grid item container xs={12} spacing={1}>
                    <Grid item xs={4}>
                        <TextField label="AC" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField InputProps={{readOnly: true}} value={currentState.Dexterity} label="Initiative" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Speed" variant="outlined" fullWidth/>
                    </Grid>
                    </Grid>
                <Grid item container xs={12} spacing={1}>
                    <Grid item xs={6}>
                        <TextField label="Current Hit points" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Hit Point Maximum" variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Temporary Hit points" variant="outlined" size='small' fullWidth/>
                    </Grid>
                </Grid>
                <Grid item container xs={12} spacing={1}>
                    <Grid item container xs={6}>
                            <Grid item xs={6}>
                                <TextField InputLabelProps={{ shrink: true }}defaultValue={1} label="Total" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField InputLabelProps={{ shrink: true }} defaultValue='D' label="Hit Dice" variant="outlined" fullWidth/>
                            </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <Grid container style={{paddingLeft:'5px'}}>
                                <Typography>
                                    Death Saves
                                </Typography>

                                <Grid item xs={12}>
                                    <FormControlLabel control={<Checkbox/>} />
                                    <FormControlLabel control={<Checkbox/>} />
                                    <FormControlLabel control={<Checkbox/>} label="Successes" />
                                </Grid>
                                <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox/>} />
                                    <FormControlLabel control={<Checkbox/>} />
                                    <FormControlLabel control={<Checkbox/>} label="Failures" />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>

                <Grid item container xs={12} spacing={1}>
                    <Grid item xs={2}>
                        <TextField InputProps={{readOnly: true}} variant="outlined" fullWidth/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField InputProps={{readOnly: true}} value='Passive Wisdom (Perception)' variant="outlined" fullWidth/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MidColumn