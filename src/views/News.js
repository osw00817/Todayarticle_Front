import React,{Fragment} from 'react';
import {Header,Footer,Search} from '../components/Layout';
import {Information,News} from '../components/News'
import '../components/Layout/Header.css'
import '../components/Layout/Search.css'
import '../components/News/news.css'
import querystring from 'query-string';

export default function Main({location,match}) {
    console.log(location);
    console.log(match);
    console.log(match.params.name)
    console.log(querystring.parse(location.search));
    console.log(querystring.parse(location.search).target);
    return(
        <Fragment>
            <News target="호날두"/>
        </Fragment>
    )
}