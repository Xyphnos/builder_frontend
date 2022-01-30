import { Grid, TextField} from '@material-ui/core';

const TopInfo = () => {
    return (
        <Grid container>
            <Grid item container xs={12} sm={5} item>
                <TextField placeholder="Character name" label="Character name" variant="outlined" fullWidth/>
            </Grid>
            <Grid item container sm={1}>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={1}>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Class & level" label="Class & level" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Background" label="Player name" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Player name" label="Player name" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Race" label="Race" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Alignment" label="Alignment" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={4} item>
                    <TextField placeholder="Experience points" label="Experience points" variant="outlined" fullWidth/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TopInfo