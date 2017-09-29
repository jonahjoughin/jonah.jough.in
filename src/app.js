import React from 'react';
import { Route, IndexRoute, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import styled from 'styled-components'
import Home from './components/Home'
import DecodingNature from './components/DecodingNature'
import ScrollReset from './components/reusable/ScrollReset'

const H1 = styled.h1`
  color: green;
`

export default () => (
  <ScrollReset>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/decoding-nature" component={DecodingNature}/>
      <Route exact path="/404" component={NotFound}/>
      <Redirect to ="/404"></Redirect>
    </Switch>
  </ScrollReset>
);
