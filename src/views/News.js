import React,{Fragment} from 'react';
import {Header,Footer,Search} from '../components/Layout';
import {Information,News} from '../components/News'
import '../components/Layout/Header.css'
import '../components/Layout/Search.css'
import '../components/News/news.css'

export default function Main({match}) {
    return(
        <Fragment>
            <News target={match.params.target}/>
        </Fragment>
    )
}