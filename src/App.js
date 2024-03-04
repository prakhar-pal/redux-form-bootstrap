import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import  routesConfig from './common/routesConfig'

function App (){
  return (
    <BrowserRouter>
      <Switch>
      {routesConfig && Array.isArray(routesConfig) ?
        routesConfig.map((route,index) => <Route {...route} key={index}/>)
        : null}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
