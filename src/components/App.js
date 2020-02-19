import React,{Fragment} from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import queryString from 'query-string';
import {Header,Footer,Search} from './Layout'
import {Information,News} from './News'
import './Layout/Search.css'
import './Layout/Header.css'
import './News/news.css'

function Home() {
  return(
    <Fragment>
      <Header />
      <Search />
      <Information />
    </Fragment>
  )
}

function Find({location, match}) {
  const {query} = queryString.parse(location.search);
  console.log(query);
  return(
    <div>
      <h1>{query}</h1>
      <News news={query}/>
    </div>
  )
}

class App extends React.Component  {
  render() {
    return (
      <BrowserRouter>
          <Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/search/:news" component={Find} />
          </Fragment>
      </BrowserRouter>
        
     );
  }
}

export default App;