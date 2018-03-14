import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from './containers/App';
import About from './containers/About';
import Person from './containers/Person';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={App}/>
   <Route path='/about' component={About}/>
   <Route path='/person' component={Person}/>
   </Switch>
   </BrowserRouter>
 )
}