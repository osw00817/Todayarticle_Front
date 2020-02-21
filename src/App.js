import React,{Fragment} from 'react';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Main from './views/Main';
import Article from './views/News';
import {Header} from './components/Layout';

export default function App(){
    return(
        <BrowserRouter>
          <Fragment>
            <Header />
              <Switch>
                <Route path="/:target" component={Article} />
                <Route path="/" component={Main} />
              </Switch>
          </Fragment>
      </BrowserRouter>
    )
}