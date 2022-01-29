import React, { useEffect } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography, Checkbox } from '@material-ui/core';
import SavingThrows from '../fragments/saving_throws';
import AbilityScoreBoard from '../fragments/ability_scores';
import TopInfo from '../fragments/top_info';
import SkillBoard from '../fragments/skills';

const NewSheet = () => {

  return (
    <Card> 
      <Typography gutterBottom variant="h3" align="center">
        Create Character
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 1200, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>

                <Grid container xs={12} spacing={1} style={{paddingBottom: "3%" }}>
                    <TopInfo/>
                </Grid>

                <Grid item container xs={12} spacing={1} style={{paddingBottom: "1%" }}>
                    <Grid container xs={4}>
                      <Grid container>
                        <Grid container xs={4} alignItems="center" justifyContent="center" direction='column'>
                          <AbilityScoreBoard/>
                        </Grid>
                        <Grid container xs={8}>
                          <SavingThrows/>
                          <SkillBoard/>
                        </Grid>
                    </Grid>
                    </Grid>
                        
                    <Grid item container sm={4} spacing={1}>
                        <Grid container xs={12} spacing={1}>
                            <Grid item xs={4}>
                                <TextField label="AC" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label="Initiative" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField label="Speed" variant="outlined" fullWidth/>
                            </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Speed" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Speed" variant="outlined" fullWidth/>
                            </Grid>
                            <Grid item container xs={12}>
                                <Grid item xs={6}>
                                    <TextField label="AC" variant="outlined" fullWidth/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField label="Initiative" variant="outlined" fullWidth/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container sm={4} spacing={1}>
                            <TextField label="Features & Traits" multiline rows={30} variant="outlined" fullWidth/>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                    </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Card>
  );
}

export default NewSheet;