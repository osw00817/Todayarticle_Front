import React,{Fragment} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Main from './views/Main';
import Article from './views/News';

export default function App(){
    return(
        <BrowserRouter>
          <Fragment>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/news/" component={Main} />
                <Route path="/:target" component={Article} />
              </Switch>
          </Fragment>
      </BrowserRouter>
    )
}