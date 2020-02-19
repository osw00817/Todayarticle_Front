import React, { component } from 'react';
import {AppBar , Toolbar , Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    Toolbar: {
        minHeight: 500
    } 
}));
export default function Header() {
    const classes = useStyles();
    return(
        <AppBar position="sticky" height="75%" color="inherit">
        <Toolbar className={classes.toolbar}>
            <Typography href="http://localhost:3000" className="title" variant="h6">
               <a style={{textDecoration:'none',color:'black'}} href="http://localhost:3000">News</a>
            </Typography>
        </Toolbar>
        </AppBar>
    );
}
