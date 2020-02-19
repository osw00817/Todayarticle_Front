import React,{Fragment} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import Main from './views/Main';
import Article from './views/News';

export default function App(){
    return(
        <BrowserRouter>
          <Fragment>
              <Route exact path="/" component={Main} />
              <Route path="/:target" component={Article} />
              <Route path="/news/" component={Main} />
          </Fragment>
      </BrowserRouter>
    )
}