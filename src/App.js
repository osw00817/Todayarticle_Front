import React,{Fragment} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Main from './views/Main';
import Article from './views/News';
import {Header} from './components/Layout';

export default function App(){
    return(
      <Router>
      <div>
        <nav>
          <Header />
        </nav>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/aa/aaa" component={Main} />
          <Route path="/:target" component={Article} />
        </Switch>
      </div>
    </Router>
  );
}