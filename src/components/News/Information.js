import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: '50px',
    },
    paper: {
      height:'500px',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    rankbar: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }));
  //
  class Infect extends React.Component {
  componentDidMount(){
    this.callApi()
  }

  callApi = async() => {
    let body;
    const response = await fetch('/korea/infect')
    .then((res) => console.log(res));
  }
  
render() {
    return(
        <div>
          
          </div>
    )
}
}
  class Weather extends React.Component {
    state = {
        temperature : 0,
        name: '',
        icon: '',
    }

  componentDidMount(){
    this.callApi()
    .then(res => {
        this.setState({
          temperature: Math.floor(res.main.temp - 273.15),
          name : res.weather[0].main,
          icon: res.weather[0].icon,
        }) 
        console.log(res);
    })
    .catch(err => console.log(err))
  }

  callApi = async() => {
    let body;
    const response = await fetch('/weather/seoul')
    .then((res) => res.json())
    .then((data) => body = data);
    return body;
  }
  
render() {
    return(
        <div>
          <h1>날씨/온도</h1>
          <p style={{marginTop:-20}}>Seoul</p> 
          <br />
          <br />
          <p><img src={"http://openweathermap.org/img/wn/" + this.state.icon + "@2x.png"} height="100"/></p> 
          <h3> {this.state.name}</h3>
          <h3>{this.state.temperature}°C</h3>  
          </div>
    )
}
}
  
  class Rank extends React.Component {
    state = {
        rank:""
    }

  componentDidMount(){
    this.callApi()
    .then(res => {
        this.setState({rank:res}) 
        console.log(res);
    })
    .catch(err => console.log(err))
  }

  callApi = async() => {
    const response = await fetch('/naver/ranking')
    .then((res) => console.log(res))
    const body = response.json();
    return body;
  }

render() {
    return(
        <div>
          <h1>실시간 검색어</h1>
                  {this.state.rank ? this.state.rank.map(c =>{
                  return  <ListItem className="rank"><ListItemText primary={c.rank + " " + c.title} /></ListItem>}) : 'err'}
          </div>
    )
}
}

export default function Header() {
  const classes = useStyles();
    function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><Infect /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
        <Grid container item xs={12} spacing={4} justify="center">
          <FormRow />
        </Grid>
    </div>
  );
}
