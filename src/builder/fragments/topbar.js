import React, { useEffect, useState } from 'react';
import {Box, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import NavStyle from '../styles/navigationStyles';
import {useNavigate} from 'react-router-dom'
import logo from '../utils/dnd_logo.png'


const TopBar = () => {

    let navigate = useNavigate();
    const classes = NavStyle().BarStyle();

    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        if(state === true){
            setState(false)
        }
        else if( state === false){
            setState(true)
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" className={classes.AppBarComp}>
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer()}
                >
                    <MenuIcon/>
                </IconButton>
                <img className={classes.LogoComp} src={logo} />
            </Toolbar>
            </AppBar>
            <Drawer
                classes={{ paper: classes.SideBarComp}}
                variant="persistent"
                anchor='left'
                open={state}
                sx={{ bgcolor: 'blue' }}
                >
                    <Toolbar />
                <List className={classes.SideListComp}>
                    <ListItem button className={classes.SideListComp}>
                        <ListItemText onClick={() => {navigate('/')}} primary='Character list' />
                    </ListItem>
                    <ListItem button className={classes.SideListComp}>
                        <ListItemText  onClick={() => {navigate('/newSheet')}} primary='Create new character' />
                    </ListItem>
                </List>
            </Drawer>
            <Toolbar/>
        </Box>
    )
}

export default TopBar